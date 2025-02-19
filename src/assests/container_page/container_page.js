import { cardsHTML } from "../../../build/assests/container_page/container_init.js"

console.log(cardsHTML);

const body = document.getElementsByTagName("body")[0];

body.innerHTML = cardsHTML;
