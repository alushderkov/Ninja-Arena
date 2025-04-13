import { LocalStorageAccessor } from "../localStorageAccessor.js";
import { uploadContainer, downloadCurrentContainer } from "./file_de_serialize.js";

async function initializeContainer(container) {
  let {Container} = await import('../../../build/components/container.js');
  let {CardContainer} = await import('../../../build/assets/container_page/card_container.js');

  const containerInstance = await LocalStorageAccessor.deserializeContainer(Container);

  let cards = new CardContainer(containerInstance);
  container.innerHTML = cards.createHTMLCode();

  cards.initCardsEvents(container);
}

function setupButtons() {
  const uploadBtn = document.querySelector('.button-container .button:nth-child(1)');
  const downloadBtn = document.querySelector('.button-container .button:nth-child(2)');

  uploadBtn.addEventListener('click', async () => {
    try {
      await uploadContainer();
      alert('Container uploaded successfully! Page will reload.');
      window.location.reload();
    } catch (error) {
      alert(`Error uploading container: ${error.message}`);
      console.error('Upload error:', error);
    }
  });

  downloadBtn.addEventListener('click', async () => {
    try {
      await downloadCurrentContainer();
      alert('Container downloaded successfully!');
    } catch (error) {
      alert(`Error downloading container: ${error.message}`);
      console.error('Download error:', error);
    }
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  const containerElement = document.getElementsByClassName("container")[0];

  if (containerElement) {
    await initializeContainer(containerElement);
    setupButtons();
  } else {
    console.error("Container element not found.");
  }
});