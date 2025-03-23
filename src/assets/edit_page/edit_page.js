import {Container} from "../../../build/components/container.js";
import {processNinjasData, updateClassSelector, updateForm} from "./form_creator.js";

processNinjasData();

document.getElementById('classSelector')
  .addEventListener('change', async function () {
    const selectedOption = this.options[this.selectedIndex];

    this.options[this.selectedIndex].textContent =
      selectedOption.textContent.trim();
      await updateForm(this.value, Container);
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
