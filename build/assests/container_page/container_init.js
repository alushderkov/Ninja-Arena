import { Container } from "../../components/container.js";
import { cardContainer } from "./card_container.js";
const cards = new cardContainer(Container);
export let cardsHTML;
cardsHTML = cards.createHTMLCode();
