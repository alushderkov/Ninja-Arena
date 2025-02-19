import { cards } from "../../../build/assests/container_page/container_init.js"

const container = document.getElementsByClassName("container")[0];

let cardsHTML = cards.createHTMLCode();

container.innerHTML = cardsHTML;
