import {Ninja, Organizations, Rank, Villages} from '../ninja';
import {windBlade, airEssence, tornado} from "./wind_powers";
import {Action, Opponents} from "../../../assests/dom_elements/arena/opponents";

export class windNinja extends Ninja {
  "_wind speed": number;

  constructor (
    name: string,
    health: number,
    chakra: number,
    rank: Rank,
    organization: Organizations,
    village: Villages,
    appearance: string,
    arena_view: string,
    wind_speed: number,
  ) {
    super(name, health, chakra, rank, organization,
      village, appearance, arena_view);
    this["_wind speed"] = wind_speed;
  }

  get windSpeed() { return this["_wind speed"]; }

  attack(arena: Opponents): Opponents {
    return windBlade(arena);
  }

  regenerate(arena: Opponents): Opponents {
    return airEssence(arena);
  }

  superpower(arena: Opponents): Opponents {
    return tornado(arena);
  }
}
