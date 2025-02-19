import {Organizations, Rank, Villages} from '../ninja';
import {fireNinja} from "./fire_ninja";
import {Action, Opponents} from "../../arena/opponents";

export class eyesClanNinja extends fireNinja {
  _eye_level: number;

  constructor(
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
  ) {
    super(name, health, chakra, rank, organization,
      village, appearance, arena_view, flame_power);
    this._eye_level = eye_level;
  }

  get eyeLevel(): number { return this._eye_level; }

  repeatEnemyAttack(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}

export class devilEyeNinja extends eyesClanNinja {

  constructor(
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
  ) {
    super(name, health, chakra, rank, organization, village,
      appearance, arena_view, flame_power, eye_level);
  }

  sacrifice(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}

export class sensorNinja extends eyesClanNinja {

  constructor(
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
  ) {
    super(name, health, chakra, rank, organization, village,
      appearance, arena_view, flame_power, eye_level);
  }

  evadeAttack(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}
