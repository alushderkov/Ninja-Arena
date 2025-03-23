import {Organizations, Rank, Villages} from "../ninja";
import {waterNinja} from "./water_ninja";
import {Opponents} from "../../opponents/opponents";
import {Action} from "../../opponents/action";

export class shadowClanNinja extends waterNinja {
  _shadow_size: number;

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
    shadow_size: number,
  }) {
    super(data);
    this._shadow_size = data.shadow_size;
  }

  get shadowSize(): number { return this._shadow_size; }

  stopEnemy(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }

}

export class shadowMaster extends shadowClanNinja {

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
    shadow_size: number,
  }) {
    super(data);
  }

  getFullChakra(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}

export class shadowGhost extends shadowClanNinja {

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
    shadow_size: number,
  }) {
    super(data);
  }

  saveChakraAfterAttack(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}
