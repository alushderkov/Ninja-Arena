import {Organizations, Rank, Villages} from "../ninja";
import {waterNinja} from "./water_ninja";
import {Opponents} from "../../opponents/opponents";
import {Action} from "../../opponents/action";

export class illusionClanNinja extends waterNinja {
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
    water_volume: number,
    eye_level: number,
  }) {
    super(data);
    this._eye_level = data.eye_level;
  }

  get eyeLevel(): number { return this._eye_level; }

  repairDamage(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }

}

export class clairvoyant extends illusionClanNinja {

  constructor(data: {
    name: string,
    health: number,
    chakra: number,
    rank: Rank,
    organization: Organizations,
    village: Villages,
    appearance: string,
    arena_view: string,
    water_volume: number,
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

export class absorber extends illusionClanNinja {

  constructor(data: {
    name: string,
    health: number,
    chakra: number,
    rank: Rank,
    organization: Organizations,
    village: Villages,
    appearance: string,
    arena_view: string,
    water_volume: number,
    eye_level: number,
  }) {
    super(data);
  }

  takeChakra(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}
