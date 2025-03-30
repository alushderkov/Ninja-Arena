import {LocalStorageAccessor} from "../localStorageAccessor.js";

async function initializeContainer(button) {
  let {Container} = await import('../../../build/components/container.js');
  let {CardContainer} = await import('../../../build/assets/container_page/card_container.js');

  const containerInstance = await LocalStorageAccessor.deserializeContainer(Container);

  let cards = new CardContainer(containerInstance);

  button.addEventListener("click", () => {
    const searchResult = cards.searchHTMLCard(input.value);
    card.innerHTML = searchResult.html;

    if (searchResult.init && card.firstElementChild) {
      searchResult.init(card.firstElementChild);
    }
  });
}

const card = document.getElementsByClassName(
  "card")[0];

const button = document.getElementsByClassName(
  "search-form__button")[0];

const input = document.getElementsByClassName(
  "search-form__input")[0];

window.addEventListener('load', async () => {
  await initializeContainer(button);
});