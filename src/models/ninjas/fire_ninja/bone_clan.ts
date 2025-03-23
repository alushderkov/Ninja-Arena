import {Organizations, Rank, Villages} from '../ninja';
import {fireNinja} from "./fire_ninja";
import {Opponents} from "../../opponents/opponents"
import {Action} from "../../opponents/action";

export class boneClanNinja extends fireNinja {
  "_bone count": number;
  private "_cursed mark": boolean;

  constructor(data: {
    name: string,
    health: number,
    chakra: number,
    rank: Rank,
    organization: Organizations,
    village: Villages,
    appearance: string,
    arena_view: string,
    flame_power: number,
    bone_count: number,
    cursed_mark: boolean,
  }) {
    super(data);
    this["_bone count"] = data.bone_count;
    this["_cursed mark"] = data.cursed_mark;
  }

  get boneCount(): number { return this["_bone count"]; }
  isCursed(): boolean { return this["_cursed mark"]; }

  swordSpine(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}

export class bonesInfinity extends boneClanNinja {

  constructor(data: {
    name: string,
    health: number,
    chakra: number,
    rank: Rank,
    organization: Organizations,
    village: Villages,
    appearance: string,
    arena_view: string,
    flame_power: number,
    bone_count: number,
    cursed_mark: boolean,
  }) {
    super(data);
  }

  getFullHP(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}

export class denseBone extends boneClanNinja {

  constructor(data: {
    name: string,
    health: number,
    chakra: number,
    rank: Rank,
    organization: Organizations,
    village: Villages,
    appearance: string,
    arena_view: string,
    flame_power: number,
    bone_count: number,
    cursed_mark: boolean,
  }) {
    super(data);
  }

  reduceDamage(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}

