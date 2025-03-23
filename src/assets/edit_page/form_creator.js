import {createNinja} from "../../../build/components/ninjaCreator.js";
import {LocalStorageAccessor} from "../localStorageAccessor.js";

let classData = {};
export function processNinjasData() {

  function processJSONData(JSONData) {
    classData = JSONData.classes;
    addClasses('AbstractNinja', document.getElementById('classSelector'));
    updateForm('AbstractNinja');
  }

  function fetchData(pathToJSON) {
    fetch(pathToJSON)
      .then( response => response.json() )
      .then( data => processJSONData(data) )
      .catch( error => console.error('Ошибка загрузки JSON:', error) );
  }

  fetchData(`classes.json`);
}
function addClasses(className, selector, level = 0) {

  function fillClassAsOption() {
    const option = document.createElement('option');

    option.value = className;
    option.innerHTML = '&nbsp;&nbsp;&nbsp;'.repeat(level * 2) + className;
    selector.appendChild(option);
  }

  function addChildClasses() {

    if (classInfo.children) {
      classInfo.children.forEach(child => {
        addClasses(child, selector, level + 1);
      });
    }
  }

  const classInfo = classData[className];

  if (classInfo) {
    fillClassAsOption();
    addChildClasses();

  } else {
    console.log('Ошибка при получении данных о классе');
  }
}

export function updateClassSelector() {
  const selector = document.getElementById('classSelector');

  selector.innerHTML = '';
  addClasses('AbstractNinja', selector);
}

export async function updateForm(className, currentContainer) {

  function addFieldsForChosenClass(form) {
    let currentClass = className;

    while (currentClass) {
      const classInfo = classData[currentClass];

      if (classInfo && classInfo.fields) {
        classInfo.fields.forEach(field => {
          const input = createField(field);
          form.appendChild(input);
        });
      }

      currentClass = Object.keys(classData).find(key =>
        classData[key].children && classData[key].children.includes(currentClass));
    }
  }

  function createSubmitButton(submitButton) {
    submitButton.type = 'submit';
    submitButton.textContent = 'Add Changes';
  }

  function createForm(form) {
    const submitButton = document.createElement('button');
    createSubmitButton(submitButton);
    form.appendChild(submitButton);
  }

  function createFormContainer(formContainer) {
    formContainer.innerHTML = '';

    const form = document.createElement('form');
    form.classList.add('form-grid');

    addFieldsForChosenClass(form);
    createForm(form);
    formContainer.appendChild(form);

    form.addEventListener('submit', function (event) {
      createNinja(event, this, currentContainer, className);
      console.log(`Current container include: ${currentContainer}`);

      LocalStorageAccessor.serializeContainer(currentContainer, classData);
    });
  }

  currentContainer = await LocalStorageAccessor.deserializeContainer(currentContainer);

  const formContainer =
    document.getElementById('formContainer');
  createFormContainer(formContainer)
}

function createField(field) {

  function createLabel(subField) {
    const label = document.createElement('label');
    label.textContent = field.placeholder;
    subField.appendChild(label);
  }

  function createInput(subField) {
    const input = document.createElement('input');
    input.type = field.type;
    input.name = field.name;
    input.placeholder = field.range ? field.range : field.placeholder;
    subField.appendChild(input);
  }

  function createOption(select, option) {
    const optionElement =
      document.createElement('option');

    optionElement.value = option;
    optionElement.textContent = option;
    select.appendChild(optionElement);
  }

  function createSelect(subField) {
    const select = document.createElement('select');
    select.name = field.name;

    field.options.forEach(option => {
      createOption(select, option);
    });

    subField.appendChild(select);
  }

  function createFileInput(subField) {
    const container = document.createElement('div');
    container.classList.add('file-input');

    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.classList.add('file-input__text');
    textInput.name = field.name;
    textInput.placeholder = field.placeholder;
    textInput.readOnly = true;

    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.classList.add('file-input__file');
    fileInput.name = field.name;
    fileInput.accept = 'image/*';

    fileInput.addEventListener('change', function () {
      if (this.files && this.files[0]) {
        textInput.value = `../../../../src/assets/edit_page/edit_pictures/` + this.files[0].name;
        console.log(textInput.value);
      }
    });

    fileInput.addEventListener('click', function () {
      textInput.value = '';
    });

    container.appendChild(fileInput);
    container.appendChild(textInput);

    subField.appendChild(container);
  }

  const result = document.createElement('div');

  if (field.name === 'appearance' || field.name === 'arena_view') {
    createLabel(result);
    createFileInput(result);
  } else if (field.type === 'select') {
    createLabel(result);
    createSelect(result);
  } else {
    createLabel(result);
    createInput(result);
  }

  return result;
}
