import {Organizations, Rank, Villages} from "../ninja";
import {waterNinja} from "./water_ninja";
import {Action, Opponents} from "../../../assests/dom_elements/arena/opponents";

export class illusionClanNinja extends waterNinja {
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
    water_volume: number,
    eye_level: number,
  ) {
    super(name, health, chakra, rank, organization, village,
      appearance, arena_view, water_volume);
    this._eye_level = eye_level;
  }

  get eyeLevel(): number { return this._eye_level; }

  repairDamage(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }

}

export class clairvoyant extends illusionClanNinja {

  constructor(
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
  ) {
    super(name, health, chakra, rank, organization, village,
      appearance, arena_view, water_volume, eye_level);
  }

  evadeAttack(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}

export class absorber extends illusionClanNinja {

  constructor(
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
  ) {
    super(name, health, chakra, rank, organization, village,
      appearance, arena_view, water_volume, eye_level);
  }

  takeChakra(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}
