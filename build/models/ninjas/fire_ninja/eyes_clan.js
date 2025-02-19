import { fireNinja } from "./fire_ninja.js";
import { Action } from "../../arena/opponents.js";
export class eyesClanNinja extends fireNinja {
    constructor(name, health, chakra, rank, organization, village, appearance, arena_view, flame_power, eye_level) {
        super(name, health, chakra, rank, organization, village, appearance, arena_view, flame_power);
        this._eye_level = eye_level;
    }
    get eyeLevel() { return this._eye_level; }
    repeatEnemyAttack(arena) {
        let result;
        result = Action(arena);
        return result;
    }
}
export class devilEyeNinja extends eyesClanNinja {
    constructor(name, health, chakra, rank, organization, village, appearance, arena_view, flame_power, eye_level) {
        super(name, health, chakra, rank, organization, village, appearance, arena_view, flame_power, eye_level);
    }
    sacrifice(arena) {
        let result;
        result = Action(arena);
        return result;
    }
}
export class sensorNinja extends eyesClanNinja {
    constructor(name, health, chakra, rank, organization, village, appearance, arena_view, flame_power, eye_level) {
        super(name, health, chakra, rank, organization, village, appearance, arena_view, flame_power, eye_level);
    }
    evadeAttack(arena) {
        let result;
        result = Action(arena);
        return result;
    }
}
