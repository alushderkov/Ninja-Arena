async function initializeContainer(button) {
  let {createDynamicNinja} = await import('../../../build/models/factories/ninjaFactory.js');
  let {Container} = await import('../../../build/components/container.js');
  let {CardContainer} = await import('../../../build/assets/container_page/card_container.js');
  const savedContainerData = JSON.parse(localStorage.getItem('Container'));
  let containerInstance;

  if (savedContainerData) {
    containerInstance = savedContainerData.map(({ type, data }) => createDynamicNinja(type, data));
  } else {
    containerInstance = Container;
  }


  let cards = new CardContainer(containerInstance);

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