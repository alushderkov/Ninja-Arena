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

  fetchData(`../ninjaData/classes.json`);
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

  function resetCharacterCard() {
    const card = document.querySelector('.character-card');
    if (!card) return;

    const nameElement = card.querySelector('.character-card__name');
    if (nameElement) nameElement.textContent = '';

    const propertyElements = card.querySelectorAll('.character-card__field_property');
    for (let i = 0; i < propertyElements.length; i++) {
      const valueElement = propertyElements[i].nextElementSibling;
      if (valueElement && valueElement.classList.contains('character-card__field_value')) {
        valueElement.textContent = '';
      }
    }

    updateFieldValue(card, 'Village', 'Konohagakure');
    updateFieldValue(card, 'Organization', 'none');
    updateFieldValue(card, 'Ninja rank', 'A');
  }

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

    const classSelector = document.getElementById('classSelector');
    const urlParams = new URLSearchParams(window.location.search);
    const isEditMode = urlParams.get('source') === 'card';

    if (isEditMode && classSelector) {
      classSelector.disabled = true;
    }

    form.addEventListener('submit', function (event) {
      classSelector.disabled = false;

      createNinja(event, this, currentContainer, className);
      console.log(`Current container include: ${currentContainer}`);

      LocalStorageAccessor.serializeContainer(currentContainer, classData);

      if (isEditMode && classSelector) {
        setTimeout(() => { classSelector.disabled = true; }, 0);
      }
    });
  }

  resetCharacterCard();

  currentContainer = await LocalStorageAccessor.deserializeContainer(currentContainer);

  const formContainer =
    document.getElementById('formContainer');
  createFormContainer(formContainer)
}

function createField(field) {

  function updateCharacterCard(fieldName, value) {
    const card = document.querySelector('.character-card');
    if (!card) return;

    switch(fieldName) {
      case 'name':
        const nameElement = card.querySelector('.character-card__name');
        if (nameElement) nameElement.textContent = value;
        break;
      case 'health':
        updateFieldValue(card, 'Health', value);
        break;
      case 'chakra':
        updateFieldValue(card, 'Chakra', value);
        break;
      case 'rank':
        updateFieldValue(card, 'Ninja rank', value);
        break;
      case 'organization':
        updateFieldValue(card, 'Organization', value);
        break;
      case 'village':
        updateFieldValue(card, 'Village', value);
        break;
      case 'appearance':
        const imgElement = card.querySelector('.character-card__img');
        if (imgElement) {
          imgElement.src = value;
          imgElement.onerror = function() {
            this.style.display = 'none';
          };
          imgElement.onload = function() {
            this.style.display = '';
          };
        }
        break;
    }
  }

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

    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get('source');
    if (field.name === 'name' && source === 'card') {
      input.readOnly = true;
    }


    input.addEventListener('input', function() {
      updateCharacterCard(field.name, this.value);
    });

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

    select.addEventListener('change', function() {
      updateCharacterCard(field.name, this.value);
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
        const filePath = `../../../../src/assets/edit_page/edit_pictures/${this.files[0].name}`;

        textInput.value = filePath;
        console.log(textInput.value);

        updateCharacterCard(field.name, filePath);
      }
    });

    container.appendChild(fileInput);
    container.appendChild(textInput);

    subField.appendChild(container);

    fileInput.addEventListener('click', function () {
      const cardImage = document.querySelector('.character-card__img');

      fileInput.files = new DataTransfer().files;
      textInput.value = '';
      cardImage.src = '';
    });
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

function updateFieldValue(card, propertyName, value) {
  const propertyElements = card.querySelectorAll('.character-card__field_property');

  for (let i = 0; i < propertyElements.length; i++) {

    if ( propertyElements[i].textContent.trim() === propertyName ) {
      const valueElement = propertyElements[i].nextElementSibling;

      if ( valueElement && valueElement.classList.contains('character-card__field_value') ) {
        valueElement.textContent = value;
      }

      break;
    }
  }
}

export function fillFormFromSessionData(characterData) {

  function setNinjaClass(ninjaType) {
    const classSelector = document.getElementById('classSelector');
    classSelector.value = ninjaType;
    classSelector.dispatchEvent(new Event('change'));
  }

  function updateImageCard(imagePath) {
    const imgElement = document.querySelector('.character-card__img');
    if (!imgElement) return;

    imgElement.src = imagePath;
    imgElement.onerror = () => imgElement.style.display = 'none';
    imgElement.onload = () => imgElement.style.display = '';
  }

  function fillFileInput(form, value) {
    const textInput = form.querySelector('.file-input__text');
    if (textInput) {
      textInput.value = value;
      textInput.dispatchEvent(new Event('input'));
    }
  }

  function fillFormField(input, value) {
    input.value = value;
    const eventType = input.tagName === 'SELECT' ? 'change' : 'input';
    input.dispatchEvent(new Event(eventType));
  }

  setNinjaClass(characterData.ninjaType);

  setTimeout(() => {
    const form = document.querySelector('.form-grid');
    if (!form) return;

    Object.entries(characterData).forEach(([key, value]) => {
      if (key === 'ninjaType') return;

      const input = form.querySelector(`[name="${key}"]`);
      if (!input) return;

      if (key === 'appearance') {
        updateImageCard(value);
        fillFileInput(form, value);
        return;
      }

      fillFormField(input, value);
    });

    sessionStorage.removeItem('editCharacterData');
  }, 100);

}