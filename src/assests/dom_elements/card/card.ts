import {NinjaType} from "../../../models/ninjas/ninja_type";

export class Card {
  _character: NinjaType;
  _photo: string;
  _name: string;
  _health: string;
  _chakra: string;
  _rank: string;
  _organization: string;
  _village: string;

  constructor(character: NinjaType) {
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
    this._rank = `
      <div class="character-card__field character-card__field_property">Ninja rank</div>
      <div class="character-card__field character-card__field_value">
        ${character.rank}
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
            this._rank + this._organization + this._village
        }
      </div>`;

    return result;
  }
}