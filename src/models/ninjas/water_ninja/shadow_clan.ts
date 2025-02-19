import {Organizations, Rank, Villages} from "../ninja";
import {waterNinja} from "./water_ninja";
import {Action, Opponents} from "../../arena/opponents";

export class shadowClanNinja extends waterNinja {
  _shadow_size: number;

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
    shadow_size: number,
  ) {
    super(name, health, chakra, rank, organization, village,
      appearance, arena_view, water_volume);
    this._shadow_size = shadow_size;
  }

  get shadowSize(): number { return this._shadow_size; }

  stopEnemy(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }

}

export class shadowMaster extends shadowClanNinja {

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
    shadow_size: number,
  ) {
    super(name, health, chakra, rank, organization, village,
      appearance, arena_view, water_volume, shadow_size);
  }

  getFullChakra(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}

export class shadowGhost extends shadowClanNinja {

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
    shadow_size: number,
  ) {
    super(name, health, chakra, rank, organization, village,
      appearance, arena_view, water_volume, shadow_size);
  }

  saveChakraAfterAttack(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}
