import {Card} from "../dom_elements/card/card";
import {NinjaType} from "../../models/ninjas/ninja_type";

export class cardContainer {
  "_all characters": Array<NinjaType>;

  constructor(all_characters: Array<NinjaType>) {
    this["_all characters"] = all_characters;
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
}