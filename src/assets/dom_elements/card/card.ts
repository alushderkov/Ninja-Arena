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
  }

  makeCard(): string {
    let result: string;

    result =
      `<div class="character-card character-card_colour">
        ${
          this._photo + this._name + this._health + this._chakra +
          this._village + this._organization + this._rank 
        }
      </div>`;

    return result;
  }
}