import {Ninja, Organizations, Rank, Villages} from '../ninja';
import {lightningBolt, electricalDischarge, thunder} from "./lightning_powers";
import {Opponents} from "../../opponents/opponents";

export class lightningNinja extends Ninja {
  _charge: number;

  constructor (data: {
    name: string,
    health: number,
    chakra: number,
    rank: Rank,
    organization: Organizations,
    village: Villages,
    appearance: string,
    arena_view: string,
    charge: number,
  }) {
    super(data);
    this._charge = data.charge;
  }

  get charge(): number { return this._charge; }

  attack(arena: Opponents): Opponents {
    return lightningBolt(arena);
  }

  regenerate(arena: Opponents): Opponents {
    return electricalDischarge(arena);
  }

  superpower(arena: Opponents): Opponents {
    return thunder(arena);
  }
}
