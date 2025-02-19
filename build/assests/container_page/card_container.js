import { Card } from "../dom_elements/card/card.js";
export class cardContainer {
    constructor(all_characters) {
        this["_all characters"] = all_characters;
    }
    createHTMLCode() {
        let result;
        result = ``;
        for (let elem of this["_all characters"]) {
            let cardHTML = new Card(elem);
            result += cardHTML.makeCard();
        }
        return result;
    }
    searchHTMLCard(character_name) {
        let result;
        result = ``;
        for (let elem of this["_all characters"]) {
            if (elem.name == character_name) {
                let cardHTML = new Card(elem);
                result = cardHTML.makeCard();
            }
        }
        return result;
    }
}
