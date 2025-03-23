import {Ninja, Organizations, Rank, Villages} from '../ninja';
import {windBlade, airEssence, tornado} from "./wind_powers";
import {Opponents} from "../../opponents/opponents";

export class windNinja extends Ninja {
  "_wind speed": number;

  constructor (data: {
    name: string,
    health: number,
    chakra: number,
    rank: Rank,
    organization: Organizations,
    village: Villages,
    appearance: string,
    arena_view: string,
    wind_speed: number,
  }) {
    super(data);
    this["_wind speed"] = data.wind_speed;
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
