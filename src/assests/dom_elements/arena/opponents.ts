class Fighter {
  _name: string;
  _health: number;
  _chakra: number;
  _damage_rate: number;
  _order: boolean;

  constructor(
    nameCharacter: string,
    healthFromCharacter: number,
    chakraFromCharacter: number,
  ) {
    this._name = nameCharacter;
    this._health = healthFromCharacter;
    this._chakra = chakraFromCharacter;
    this._damage_rate = 1;
    this._order = false;
  }

  get name(): string { return this._name; }
  get health(): number { return this._health; }
  get chakra(): number { return this._chakra; }
  get damageRate(): number { return this._damage_rate; }
  get order(): boolean { return this._order; }

  set name(aString: string) { this._name = aString; }
  set health(aNumber: number) { this._health = aNumber; }
  set chakra(aNumber: number) { this._chakra = aNumber; }
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

export function Action(arena: Opponents): Opponents {
  let result: Opponents;

  result = arena;
  result.enemy.health -= 150;
  result.you.chakra -= 120;
  result.enemy.chakra += 100;

  return result;
}

