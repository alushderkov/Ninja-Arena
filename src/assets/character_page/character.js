import {Container} from "../../../build/components/container.js";
import {cardContainer} from "../../../build/assets/container_page/card_container.js";

let cards = new cardContainer(Container);

const card = document.getElementsByClassName(
    "card")[0];

const button = document.getElementsByClassName(
    "search-form__button")[0];

const input = document.getElementsByClassName(
    "search-form__input")[0];

button.addEventListener("click", () => {
        card.innerHTML = cards.searchHTMLCard(input.value);
    }
)

