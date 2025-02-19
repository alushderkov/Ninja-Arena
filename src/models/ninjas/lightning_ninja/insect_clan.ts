import {Organizations, Rank, Villages} from '../ninja';
import {lightningNinja} from "./lightning_ninja";
import {Action, Opponents} from "../../../assests/dom_elements/arena/opponents";

export class insectClanNinja extends lightningNinja {
  "_bug count": number;

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
    bug_count: number,
  ) {
    super(name, health, chakra, rank, organization,
      village, appearance, arena_view, charge);
    this["_bug count"] = bug_count;
  }

  get bugCount(): number { return this["_bug count"]; }

  bugStorm(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}

export class beeKeeper extends insectClanNinja {

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
    bug_count: number,
  ) {
    super(name, health, chakra, rank, organization, village,
      appearance, arena_view, charge, bug_count);
  }

  smth(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}

export class antKing extends insectClanNinja {

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
    bug_count: number,
  ) {
    super(name, health, chakra, rank, organization, village,
      appearance, arena_view, charge, bug_count);
  }

  smth(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}
