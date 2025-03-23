import {Ninja, Organizations, Rank, Villages} from '../ninja';
import {fireBall, heartOfHell, fireDestruction} from "./fire_powers";
import {Opponents} from "../../opponents/opponents";

export class fireNinja extends Ninja {
  "_flame power": number;

  constructor (data: {
    name: string,
    health: number,
    chakra: number,
    rank: Rank,
    organization: Organizations,
    village: Villages,
    appearance: string,
    arena_view: string,
    flame_power: number,
  }) {
    super(data);
    this["_flame power"] = data.flame_power;
  }

  get flamePower() { return this["_flame power"]; }

  attack(arena: Opponents): Opponents {
    return fireBall(arena);
  }

  regenerate(arena: Opponents): Opponents {
    return heartOfHell(arena);
  }

  superpower(arena: Opponents): Opponents {
    return fireDestruction(arena);
  }
}
