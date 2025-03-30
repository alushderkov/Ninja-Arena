import {Card} from "../dom_elements/card/card";
import {Ninja} from "../../models/ninjas/ninja";

export class CardContainer {
  "_all characters": Array<Ninja>;
  _cards: Card[] = [];

  constructor(all_characters: Array<Ninja>) {
    this["_all characters"] = all_characters;
  }

  get all_characters(): Array<Ninja> {
    return this["_all characters"];
  }

  createHTMLCode(): string {
    this._cards = [];
    let result = '';

    for (let elem of this["_all characters"]) {
      const card = new Card(elem);
      this._cards.push(card);
      result += card.makeCard();
    }

    return result;
  }

  initCardsEvents(container: HTMLElement): void {
    for (let card of this._cards) {
      const cardElement = container.querySelector(`#${card._character.name}`) as HTMLElement;
      if (cardElement) {
        card.initCardEvents(cardElement);
      }
    }
  }

  searchHTMLCard(characterName: string): {html: string, init: (element: HTMLElement) => void} {

    for (let elem of this["_all characters"]) {

      if (elem.name === characterName) {
        const card = new Card(elem);

        return {
          html: card.makeCard(),
          init: (element) => card.initCardEvents(element)
        };
      }
    }
    return {html: '', init: () => {}};
  }
}