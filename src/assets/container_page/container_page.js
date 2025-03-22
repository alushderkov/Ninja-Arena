async function initializeContainer(container) {
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