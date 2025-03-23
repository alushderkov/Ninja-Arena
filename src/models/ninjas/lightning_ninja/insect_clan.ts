import {Organizations, Rank, Villages} from '../ninja';
import {lightningNinja} from "./lightning_ninja";
import {Opponents} from "../../opponents/opponents";
import {Action} from "../../opponents/action";

export class insectClanNinja extends lightningNinja {
  "_bug count": number;

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
    bug_count: number,
  }) {
    super(data);
    this["_bug count"] = data.bug_count;
  }

  get bugCount(): number { return this["_bug count"]; }

  bugStorm(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}

export class beeKeeper extends insectClanNinja {

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
    bug_count: number,
  }) {
    super(data);
  }

  beeCloud(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}

export class antKing extends insectClanNinja {

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
    bug_count: number,
  }) {
    super(data);
  }

  anthillRescue(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}
