import {Container} from "../../components/container";
import {cardContainer} from "./card_container";

const cards = new cardContainer(Container);

export let cardsHTML: string;
cardsHTML = cards.createHTMLCode();