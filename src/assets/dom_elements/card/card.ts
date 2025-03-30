import {Ninja} from "../../../models/ninjas/ninja";

export class Card {
  _character: Ninja;
  _photo: string;
  _name: string;
  _health: string;
  _chakra: string;
  _rank: string;
  _organization: string;
  _village: string;
  _edit: string;

  constructor(character: Ninja) {
    this._character = character;
    this._photo = `
      <div class="character-card__photo">
            <img
                class="character-card__img"
                src="${character.appearance}"
                alt="Character image"
            >
        </div>`;
    this._name = `
      <div class="character-card__name">${character.name}</div>
    `;
    this._health = `
      <div class="character-card__field character-card__field_property">Health</div>
      <div class="character-card__field character-card__field_value">
        ${character.health}pt
      </div>
    `;
    this._chakra = `
      <div class="character-card__field character-card__field_property">Chakra</div>
      <div class="character-card__field character-card__field_value">
        ${character.chakra}pt
      </div>
    `;

    const rankMap = { 1: 'A', 2: 'B', 3: 'C', 4: 'S', 5: 'K' };
    const rankString = rankMap[character.rank] || character.rank;

    this._rank = `
      <div class="character-card__field character-card__field_property">Ninja rank</div>
      <div class="character-card__field character-card__field_value">
        ${rankString}
      </div>
    `;
    this._organization = `
      <div class="character-card__field character-card__field_property">Organization</div>
      <div class="character-card__field character-card__field_value">
        ${character.organization}
      </div>
    `;
    this._village = `
      <div class="character-card__field character-card__field_property">Village</div>
      <div class="character-card__field character-card__field_value">
        ${character.village}
      </div>
    `;
    this._edit = `
        <div class="character-card__edit_button">EDIT</div>
    `;
  }

  makeCard(): string {
    let result: string;

    result =
      `<div class="character-card character-card_colour" id="${this._character.name}">
        ${
          this._photo + this._name + this._health + this._chakra +
          this._village + this._organization + this._rank + this._edit
        }
      </div>
      `;

    return result;
  }

  initCardEvents(cardElement: HTMLElement) {
    const editButton = cardElement.querySelector('.character-card__edit_button');
    if (!editButton) return;

    const rankMap = { 1: 'A', 2: 'B', 3: 'C', 4: 'S', 5: 'K' };
    const rankString = rankMap[this._character.rank] || this._character.rank;

    editButton.addEventListener("click", (event) => {
      event.stopPropagation();

      let appearancePath = this._character.appearance;
      if (appearancePath) {
        appearancePath = this.normalizeImagePath(appearancePath);
      }

      const characterData = {
        name: this._character.name,
        appearance: appearancePath,
        health: this._character.health,
        chakra: this._character.chakra,
        rank: rankString,
        organization: this._character.organization,
        village: this._character.village,
        ninjaType: this._character.constructor.name
      };

      sessionStorage.setItem('editCharacterData', JSON.stringify(characterData));

      const editPagePath = 'OOTPiSP/src/assets/edit_page/edit_page.html';
      window.location.href = new URL(editPagePath, window.location.origin).href;
    });
  }

  private normalizeImagePath(path: string): string {

    if (!path) return path;

    path = path.replace(/src\//g, '');
    path = path.replace(/^(\.\.\/)+/, '../../');

    return path;
  }
}