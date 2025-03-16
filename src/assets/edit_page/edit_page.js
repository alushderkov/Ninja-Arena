import {Container} from "../../../build/components/container.js";
import {CardContainer} from "../../../build/assets/container_page/card_container.js";

let cards = new CardContainer(Container);

let classData = {};

fetch('classes.json')
  .then(response => response.json())
  .then(data => {
    classData = data.classes;
    populateClassSelector('Ninja', document.getElementById('classSelector'));
    updateForm('Ninja');
  })
  .catch(error => console.error('Ошибка загрузки JSON:', error));

function populateClassSelector(className, selector, level = 0) {
  const classInfo = classData[className];
  if (!classInfo) return;

  const option = document.createElement('option');
  option.value = className;

  // Добавляем отступы для визуализации иерархии
  option.innerHTML = '&nbsp;&nbsp;&nbsp;'.repeat(level * 2) + className;
  selector.appendChild(option);

  // Рекурсивно добавляем дочерние классы
  if (classInfo.children) {
    classInfo.children.forEach(child => {
      populateClassSelector(child, selector, level + 1);
    });
  }
}

function updateClassSelector() {
  const selector = document.getElementById('classSelector');
  selector.innerHTML = ''; // Очищаем список
  populateClassSelector('Ninja', selector); // Заполняем заново
}

function updateForm(className) {
  const formContainer = document.getElementById('formContainer');
  formContainer.innerHTML = '';

  const form = document.createElement('form');
  form.classList.add('form-grid'); // Добавляем класс для сетки

  // Добавляем поля для текущего класса и всех его родителей
  let currentClass = className;
  while (currentClass) {
    const classInfo = classData[currentClass];
    if (classInfo && classInfo.fields) {
      classInfo.fields.forEach(field => {
        const input = createInput(field);
        form.appendChild(input);
      });
    }
    // Переходим к родительскому классу
    currentClass = Object.keys(classData).find(key => classData[key].children && classData[key].children.includes(currentClass));
  }

  // Добавляем кнопку отправки формы
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Create Ninja';
  form.appendChild(submitButton);

  // Обработчик отправки формы
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    const ninjaData = {};
    formData.forEach((value, key) => {
      ninjaData[key] = value;
    });
    console.log('Создан объект:', ninjaData);
  });

  formContainer.appendChild(form);
}

function createInput(field) {
  const container = document.createElement('div');

  if (field.type === 'select') {
    const label = document.createElement('label');
    label.textContent = field.placeholder;
    container.appendChild(label);

    const select = document.createElement('select');
    select.name = field.name;
    field.options.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option;
      optionElement.textContent = option;
      select.appendChild(optionElement);
    });
    container.appendChild(select);
  } else {
    const label = document.createElement('label');
    label.textContent = field.placeholder;
    container.appendChild(label);

    const input = document.createElement('input');
    input.type = field.type;
    input.name = field.name;
    input.placeholder = field.placeholder;
    container.appendChild(input);
  }

  return container;
}

document.getElementById('classSelector').addEventListener('change', function () {
  const selectedOption = this.options[this.selectedIndex];

  // Отображаем текст без отступов в поле выбора
  this.options[this.selectedIndex].textContent = selectedOption.textContent.trim(); // Убираем отступы

  // Обновляем форму
  updateForm(this.value);
});

document.getElementById('classSelector').addEventListener('mousedown', function () {
  updateClassSelector(); // Генерируем выпадающий список заново
});


/* todo:
В общем контейнере добавить кнопку на html странице добавления карты
(можно это сделать самом html, а можно в создании содержимого контейнера в скрипте

На каждой карте добавить кнопку редактирования

И добавление, и изменение будут работать одинаково: добавление очевидно,
а вот изменение - это по сути дела добавление с удалением уже существующего
персонажа

А может, и нет. Сделать добавление и изменение отдельно
 */

export {cards};