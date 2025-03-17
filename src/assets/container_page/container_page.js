async function initializeContainer(container) {
  let {cards} = await import('../edit_page/export_container.js');
  container.innerHTML = cards.createHTMLCode();
}

let container =
  document.getElementsByClassName("container")[0];

window.onload = async () => {
  await initializeContainer(container);
};