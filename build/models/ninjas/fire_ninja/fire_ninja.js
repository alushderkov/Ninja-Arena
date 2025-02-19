import { Ninja } from "../ninja.js";
import { fireBall, heartOfHell, fireDestruction } from "./fire_powers.js";
export class fireNinja extends Ninja {
    constructor(name, health, chakra, rank, organization, village, appearance, arena_view, flame_power) {
        super(name, health, chakra, rank, organization, village, appearance, arena_view);
        this["_flame power"] = flame_power;
    }
    get flamePower() { return this["_flame power"]; }
    attack(arena) {
        return fireBall(arena);
    }
    regenerate(arena) {
        return heartOfHell(arena);
    }
    superpower(arena) {
        return fireDestruction(arena);
    }
}
