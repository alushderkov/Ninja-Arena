import {LocalStorageAccessor} from "../localStorageAccessor.js";

async function initializeContainer(container) {
  let {Container} = await import('../../../build/components/container.js');
  let {CardContainer} = await import('../../../build/assets/container_page/card_container.js');

  const containerInstance = await LocalStorageAccessor.deserializeContainer(Container);

  let cards = new CardContainer(containerInstance);
  container.innerHTML = cards.createHTMLCode();
}

let container =
  document.getElementsByClassName("container")[0];

window.onload = async () => {
  if (container) {
    await initializeContainer(container);
  } else {
    console.error("Container element not found.");
  }
};