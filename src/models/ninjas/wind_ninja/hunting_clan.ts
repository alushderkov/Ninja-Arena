import {Organizations, Rank, Villages} from "../ninja";
import {windNinja} from "./wind_ninja";
import {Opponents} from "../../opponents/opponents";
import {Action} from "../../opponents/action";

export class huntingClanNinja extends windNinja {
  "_dog count": number;
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
    dog_count: number,
  }) {
    super(data);
    this["_dog count"] = data.dog_count;
  }

  get dogCount(): number { return this["_dog count"]; }

  hunt(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}

export class wolfHunters extends huntingClanNinja {

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
    dog_count: number,
  }) {
    super(data);
  }
  knife(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}

export class birdwatchers extends huntingClanNinja {

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
    dog_count: number,
  }) {
    super(data);
  }

  revolver(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}
