import {Organizations, Rank, Villages} from "../ninja";
import {windNinja} from "./wind_ninja";
import {Opponents} from "../../opponents/opponents";
import {Action} from "../../opponents/action";

export class huntingClanNinja extends windNinja {
  "_dog count": number;
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
    dog_count: number,
  ) {
    super(name, health, chakra, rank, organization,
      village, appearance, arena_view, charge);
    this["_dog count"] = dog_count;
  }

  get dogCount(): number { return this["_dog count"]; }

  hunt(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}

export class wolfHunters extends huntingClanNinja {

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
    dog_count: number,
  ) {
    super(name, health, chakra, rank, organization, village,
      appearance, arena_view, charge, dog_count);
  }
  knife(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}

export class birdwatchers extends huntingClanNinja {

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
    dog_count: number,
  ) {
    super(name, health, chakra, rank, organization, village,
      appearance, arena_view, charge, dog_count);
  }

  revolver(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}
