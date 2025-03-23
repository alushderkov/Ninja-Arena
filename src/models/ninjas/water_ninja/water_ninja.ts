import {Ninja, Organizations, Rank, Villages} from '../ninja';
import {waterDragon, holySpring, greatWaterfall} from "./water_powers";
import {Opponents} from "../../opponents/opponents";

export class waterNinja extends Ninja {
  "_water volume": number;

  constructor (data: {
    name: string,
    health: number,
    chakra: number,
    rank: Rank,
    organization: Organizations,
    village: Villages,
    appearance: string,
    arena_view: string,
    water_volume: number,
  }) {
    super(data);
    this["_water volume"] = data.water_volume;
  }

  get waterVolume() { return this["_water volume"]; }

  attack(arena: Opponents): Opponents {
    return waterDragon(arena);
  }

  regenerate(arena: Opponents): Opponents {
    return holySpring(arena);
  }

  superpower(arena: Opponents): Opponents {
    return greatWaterfall(arena);
  }
}
