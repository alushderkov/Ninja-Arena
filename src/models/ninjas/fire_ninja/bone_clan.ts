import {Organizations, Rank, Villages} from '../ninja';
import {fireNinja} from "./fire_ninja";
import {Action, Opponents} from "../../../assests/dom_elements/arena/opponents"

export class boneClanNinja extends fireNinja {
  "_bone count": number;
  private "_cursed mark": boolean;

  constructor(
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
  ) {
    super(name, health, chakra, rank, organization, village,
      appearance, arena_view, flame_power);
    this["_bone count"] = bone_count;
    this["_cursed mark"] = cursed_mark;
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

  constructor(
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
  ) {
    super(name, health, chakra, rank, organization, village,
      appearance, arena_view, flame_power, bone_count, cursed_mark);
  }

  getFullHP(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}

export class denseBone extends boneClanNinja {

  constructor(
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
  ) {
    super(name, health, chakra, rank, organization, village,
      appearance, arena_view, flame_power, bone_count, cursed_mark);
  }

  reduceDamage(arena: Opponents): Opponents {
    let result: Opponents;
    result = Action(arena);
    return result;
  }
}

