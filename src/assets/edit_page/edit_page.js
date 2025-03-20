import {processNinjasData, updateClassSelector, updateForm} from "./form_creator.js";
import {createNinja} from "../../../build/components/ninjaCreator.js";

processNinjasData();

document.getElementById('classSelector')
  .addEventListener('change', function () {
    const selectedOption = this.options[this.selectedIndex];

    this.options[this.selectedIndex].textContent =
      selectedOption.textContent.trim();
      updateForm(this.value);
});

document.getElementById('classSelector')
  .addEventListener('mousedown', function () {
    updateClassSelector();
});

window.addEventListener('load', () => {
  setTimeout(() => {
    const container_left =
      document.getElementsByClassName('container_left')[0];
    const container_right =
      document.getElementsByClassName('container_right')[0];

    if (container_left && container_right) {
      container_left.style.height =
        window.getComputedStyle(container_right).height;
    }
  }, 100);
});

document.getElementById('ninjaForm')
  .addEventListener('submit', function (event) {
    createNinja(event, this);
  });
