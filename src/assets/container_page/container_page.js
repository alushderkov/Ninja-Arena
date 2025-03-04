import {Container} from "../../../build/components/container.js";
import {cardContainer} from "../../../build/assets/container_page/card_container.js";

let cards = new cardContainer(Container);
let cardsHTML = cards.createHTMLCode();

const container = document.getElementsByClassName("container")[0];
container.innerHTML = cardsHTML;
