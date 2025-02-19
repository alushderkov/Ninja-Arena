import { waterNinja } from "./water_ninja.js";
import { Action } from "../../../assests/dom_elements/arena/opponents.js";
export class shadowClanNinja extends waterNinja {
    constructor(name, health, chakra, rank, organization, village, appearance, arena_view, water_volume, shadow_size) {
        super(name, health, chakra, rank, organization, village, appearance, arena_view, water_volume);
        this._shadow_size = shadow_size;
    }
    get shadowSize() { return this._shadow_size; }
    stopEnemy(arena) {
        let result;
        result = Action(arena);
        return result;
    }
}
export class shadowMaster extends shadowClanNinja {
    constructor(name, health, chakra, rank, organization, village, appearance, arena_view, water_volume, shadow_size) {
        super(name, health, chakra, rank, organization, village, appearance, arena_view, water_volume, shadow_size);
    }
    getFullChakra(arena) {
        let result;
        result = Action(arena);
        return result;
    }
}
export class shadowGhost extends shadowClanNinja {
    constructor(name, health, chakra, rank, organization, village, appearance, arena_view, water_volume, shadow_size) {
        super(name, health, chakra, rank, organization, village, appearance, arena_view, water_volume, shadow_size);
    }
    saveChakraAfterAttack(arena) {
        let result;
        result = Action(arena);
        return result;
    }
}
