import {Organizations, Rank, Villages} from "../ninja";
import {windNinja} from "./wind_ninja";
import {Action, Opponents} from "../../arena/opponents";

export class medicalClanNinja extends windNinja {
  _experience: number;

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
    experience: number,
  ) {
    super(name, health, chakra, rank, organization,
      village, appearance, arena_view, charge);
    this._experience = experience;
  }

  get experience(): number { return this._experience; }

  superRegeneration(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}

export class militaryDoctor extends medicalClanNinja {

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
    experience: number,
  ) {
    super(name, health, chakra, rank, organization,
      village, appearance, arena_view, charge, experience);
  }

  smth(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}

export class neurosurgeon extends medicalClanNinja {

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
    experience: number,
  ) {
    super(name, health, chakra, rank, organization,
      village, appearance, arena_view, charge, experience);
  }

  smth(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}
