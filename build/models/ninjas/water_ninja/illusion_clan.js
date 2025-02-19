import { waterNinja } from "./water_ninja.js";
import { Action } from "../../../assests/dom_elements/arena/opponents.js";
export class illusionClanNinja extends waterNinja {
    constructor(name, health, chakra, rank, organization, village, appearance, arena_view, water_volume, eye_level) {
        super(name, health, chakra, rank, organization, village, appearance, arena_view, water_volume);
        this._eye_level = eye_level;
    }
    get eyeLevel() { return this._eye_level; }
    repairDamage(arena) {
        let result;
        result = Action(arena);
        return result;
    }
}
export class clairvoyant extends illusionClanNinja {
    constructor(name, health, chakra, rank, organization, village, appearance, arena_view, water_volume, eye_level) {
        super(name, health, chakra, rank, organization, village, appearance, arena_view, water_volume, eye_level);
    }
    evadeAttack(arena) {
        let result;
        result = Action(arena);
        return result;
    }
}
export class absorber extends illusionClanNinja {
    constructor(name, health, chakra, rank, organization, village, appearance, arena_view, water_volume, eye_level) {
        super(name, health, chakra, rank, organization, village, appearance, arena_view, water_volume, eye_level);
    }
    takeChakra(arena) {
        let result;
        result = Action(arena);
        return result;
    }
}
