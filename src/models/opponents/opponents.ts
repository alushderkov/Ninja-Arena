import {Ninja} from "../ninjas/ninja";

class Fighter {
  _character: Ninja;
  _health: number;
  _chakra: number;
  _damage_rate: number;
  _order: boolean;

  constructor(character: Ninja) {
    this._character = character;
    this._health = character.health;
    this._chakra = character.chakra;
    this._damage_rate = 1;
    this._order = false;
  }

  get character(): Ninja { return this._character; }
  get health(): number { return this._health; }
  get chakra(): number { return this._chakra; }
  get damageRate(): number { return this._damage_rate; }
  get order(): boolean { return this._order; }

  set health(aNumber: number) { this._health = aNumber; }
  set chakra(aNumber: number) { this._chakra = aNumber; }
  set character(aNinja: Ninja) { this._character = aNinja; }
  set damageRate(aNumber: number) { this._damage_rate = aNumber; }
  set order(aBoolean: boolean) { this._order = aBoolean; }
}

interface OpponentsType {
  _You: Fighter,
  _Enemy: Fighter,
}

export class Opponents implements OpponentsType {
  _You: Fighter;
  _Enemy: Fighter;

  constructor(you: Fighter, enemy: Fighter) {
    this._You = you;
    this._Enemy = enemy;
  }

  get you(): Fighter { return this._You; }
  get enemy(): Fighter { return this._Enemy; }

  set you(aFighter: Fighter) { this._You = aFighter; }
  set enemy(aFighter: Fighter) { this._Enemy = aFighter; }
}


