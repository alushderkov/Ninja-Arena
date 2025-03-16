import {Card} from "../dom_elements/card/card";
import {Ninja} from "../../models/ninjas/ninja";

export class CardContainer {
  "_all characters": Array<Ninja>;

  constructor(all_characters: Array<Ninja>) {
    this["_all characters"] = all_characters;
  }

  get all_characters(): Array<Ninja> {
    return this["_all characters"];
  }

  createHTMLCode(): string {
    let result: string;
    result = ``;

    for(let elem of this["_all characters"]) {
      let cardHTML: Card = new Card(elem);
      result += cardHTML.makeCard();
    }

    return result;
  }

  searchHTMLCard(character_name: string): string {
    let result: string;
    result = ``;

    for(let elem of this["_all characters"]) {

      if (elem.name == character_name) {
        let cardHTML: Card = new Card(elem);
        result = cardHTML.makeCard();
      }
    }

    return result;
  }
}