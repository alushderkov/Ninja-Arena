import { Ninja, Organizations, Rank, Villages } from "./ninja";
import { Opponents } from "../opponents/opponents";
import { fireBall } from "./fire_ninja/fire_powers";
import { holySpring } from "./water_ninja/water_powers";
import { thunder } from "./lightning_ninja/lightning_powers";
import {fireNinja} from "./fire_ninja/fire_ninja";

export class ExtraClass extends fireNinja {
  _extra_field: number;
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
    extra_field: number
  }) {
    super(data);
    this._extra_field = data.extra_field;
  }

  attack(arena: Opponents): Opponents {
    return fireBall(arena);
  }

  regenerate(arena: Opponents): Opponents {
    return holySpring(arena);
  }

  superpower(arena: Opponents): Opponents {
    return thunder(arena);
  }
}