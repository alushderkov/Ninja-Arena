import {Opponents} from "../arena/opponents";

export const baseImagesPath: string = `../../../../src/components/characters`;
export enum Rank {
  A = 1,
  B = 2,
  C = 3,
  S = 4,
  K = 5
}

export type Villages =
  "Konohagakure" |
  "Kirigakure" |
  "Kumogakure" |
  "Iwagakure" |
  "Uzushinogakure" |
  "Amegakure" |
  "Sunagakure" |
  "Otogakure";

export type Organizations =
  "akatsuki" |
  "anbu" |
  "sanins" |
  "orodevils" |
  "none";

export abstract class Ninja {
  _name: string;
  _health: number;
  _chakra: number;
  "_ninja rank": Rank;
  _organization: Organizations;
  _village: Villages;
  _appearance: string;
  "_arena view": string;

  constructor(
    name: string,
    health: number,
    chakra: number,
    rank: Rank,
    organization: Organizations,
    village: Villages,
    appearance: string,
    arena_view: string,
  ) {
    this._name = name;
    this._health = health;
    this._chakra = chakra;
    this["_ninja rank"] = rank;
    this._organization = organization;
    this._village = village;
    this._appearance = appearance;
    this["_arena view"] = arena_view;
  }

  get name(): string { return this._name; }
  get health(): number { return this._health; }
  get chakra(): number { return this._chakra; }
  get rank(): Rank { return this["_ninja rank"]; }
  get organization(): string { return this._organization; }
  get village(): string { return this._village; }
  get appearance(): string { return this._appearance; }
  get arenaView(): string { return this["_arena view"]; }

  study(requirement: boolean): any {
  };
  train(score: number): any {
  };

  abstract attack(arena: Opponents): Opponents;
  abstract regenerate(arena: Opponents): Opponents;
  abstract superpower(arena: Opponents): Opponents;

}

