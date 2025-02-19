import {Ninja, Organizations, Rank, Villages} from '../ninja';
import {lightningBolt, electricalDischarge, thunder} from "./lightning_powers";
import {Action, Opponents} from "../../../assests/dom_elements/arena/opponents";

export class lightningNinja extends Ninja {
  _charge: number;

  constructor (
    name: string,
    health: number,
    chakra: number,
    rank: Rank,
    organization: Organizations,
    village: Villages,
    appearance: string,
    arena_view: string,
    charge: number,
  ) {
    super(name, health, chakra, rank, organization,
      village, appearance, arena_view);
    this._charge = charge;
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
