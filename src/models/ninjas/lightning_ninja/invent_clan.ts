import {Organizations, Rank, Villages} from '../ninja';
import {lightningNinja} from "./lightning_ninja";
import {Action, Opponents} from "../../arena/opponents";

export class inventClanNinja extends lightningNinja {
  _iq: number;
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
    iq: number,
  ) {
    super(name, health, chakra, rank, organization,
      village, appearance, arena_view, charge);
    this._iq = iq;
  }

  get iq(): number { return this._iq; }

  developHP(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}

export class engineer extends inventClanNinja {

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
    iq: number,
  ) {
    super(name, health, chakra, rank, organization,
      village, appearance, arena_view, charge, iq);
  }

  smth(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}

export class chemist extends inventClanNinja {

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
    iq: number,
  ) {
    super(name, health, chakra, rank, organization,
      village, appearance, arena_view, charge, iq);
  }

  smth(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}
