import { fireNinja } from "./fire_ninja.js";
import { Action } from "../../arena/opponents.js";
export class boneClanNinja extends fireNinja {
    constructor(name, health, chakra, rank, organization, village, appearance, arena_view, flame_power, bone_count, cursed_mark) {
        super(name, health, chakra, rank, organization, village, appearance, arena_view, flame_power);
        this["_bone count"] = bone_count;
        this["_cursed mark"] = cursed_mark;
    }
    get boneCount() { return this["_bone count"]; }
    isCursed() { return this["_cursed mark"]; }
    swordSpine(arena) {
        let result;
        result = Action(arena);
        return result;
    }
}
export class bonesInfinity extends boneClanNinja {
    constructor(name, health, chakra, rank, organization, village, appearance, arena_view, flame_power, bone_count, cursed_mark) {
        super(name, health, chakra, rank, organization, village, appearance, arena_view, flame_power, bone_count, cursed_mark);
    }
    getFullHP(arena) {
        let result;
        result = Action(arena);
        return result;
    }
}
export class denseBone extends boneClanNinja {
    constructor(name, health, chakra, rank, organization, village, appearance, arena_view, flame_power, bone_count, cursed_mark) {
        super(name, health, chakra, rank, organization, village, appearance, arena_view, flame_power, bone_count, cursed_mark);
    }
    reduceDamage(arena) {
        let result;
        result = Action(arena);
        return result;
    }
}
