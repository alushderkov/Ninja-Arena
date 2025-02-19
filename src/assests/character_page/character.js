import { cards } from "../../../build/assests/container_page/container_init.js";

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

