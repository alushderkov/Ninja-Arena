import {Organizations, Rank, Villages} from '../ninja';
import {fireNinja} from "./fire_ninja";
import {Opponents} from "../../opponents/opponents";
import {Action} from "../../opponents/action";

export class eyesClanNinja extends fireNinja {
  _eye_level: number;

  constructor(data: {
    name: string,
    health: number,
    chakra: number,
    rank: Rank,
    organization: Organizations,
    village: Villages,
    appearance: string,
    arena_view: string,
    flame_power: number,
    eye_level: number,
  }) {
    super(data);
    this._eye_level = data.eye_level;
  }

  get eyeLevel(): number { return this._eye_level; }

  repeatEnemyAttack(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}

export class devilEyeNinja extends eyesClanNinja {

  constructor(data: {
    name: string,
    health: number,
    chakra: number,
    rank: Rank,
    organization: Organizations,
    village: Villages,
    appearance: string,
    arena_view: string,
    flame_power: number,
    eye_level: number,
  }) {
    super(data);
  }

  sacrifice(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}

export class sensorNinja extends eyesClanNinja {

  constructor(data: {
    name: string,
    health: number,
    chakra: number,
    rank: Rank,
    organization: Organizations,
    village: Villages,
    appearance: string,
    arena_view: string,
    flame_power: number,
    eye_level: number,
  }) {
    super(data);
  }

  evadeAttack(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}
