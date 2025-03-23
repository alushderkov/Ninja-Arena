import {Organizations, Rank, Villages} from '../ninja';
import {lightningNinja} from "./lightning_ninja";
import {Opponents} from "../../opponents/opponents";
import {Action} from "../../opponents/action";

export class inventClanNinja extends lightningNinja {
  _iq: number;
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
    iq: number,
  }) {
    super(data);
    this._iq = data.iq;
  }

  get iq(): number { return this._iq; }

  developHP(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}

export class engineer extends inventClanNinja {

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
    iq: number,
  }) {
    super(data);
  }

  studyEnemy(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}

export class chemist extends inventClanNinja {

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
    iq: number,
  }) {
    super(data);
  }

  acidRain(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}
