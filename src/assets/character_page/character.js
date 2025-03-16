async function initializeContainer(button) {
  let {cards} = await import('../general_data.js');

  button.addEventListener("click", () => {
      card.innerHTML = cards.searchHTMLCard(input.value);
    }
  )
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