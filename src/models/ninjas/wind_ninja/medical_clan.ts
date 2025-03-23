import {Organizations, Rank, Villages} from "../ninja";
import {windNinja} from "./wind_ninja";
import {Opponents} from "../../opponents/opponents";
import {Action} from "../../opponents/action";

export class medicalClanNinja extends windNinja {
  _experience: number;

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
    experience: number,
  }) {
    super(data);
    this._experience = data.experience;
  }

  get experience(): number { return this._experience; }

  superRegeneration(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}

export class militaryDoctor extends medicalClanNinja {

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
    experience: number,
  }) {
    super(data);
  }

  ligation(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}

export class neurosurgeon extends medicalClanNinja {

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
    experience: number,
  }) {
    super(data);
  }

  surgery(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}
