import { windNinja } from "./wind_ninja.js";
import { Action } from "../../../assests/dom_elements/arena/opponents.js";
export class huntingClanNinja extends windNinja {
    constructor(name, health, chakra, rank, organization, village, appearance, arena_view, charge, dog_count) {
        super(name, health, chakra, rank, organization, village, appearance, arena_view, charge);
        this["_dog count"] = dog_count;
    }
    get dogCount() { return this["_dog count"]; }
    hunt(arena) {
        let result;
        result = Action(arena);
        return result;
    }
}
export class wolfHunters extends huntingClanNinja {
    constructor(name, health, chakra, rank, organization, village, appearance, arena_view, charge, dog_count) {
        super(name, health, chakra, rank, organization, village, appearance, arena_view, charge, dog_count);
    }
    smth(arena) {
        let result;
        result = Action(arena);
        return result;
    }
}
export class birdwatchers extends huntingClanNinja {
    constructor(name, health, chakra, rank, organization, village, appearance, arena_view, charge, dog_count) {
        super(name, health, chakra, rank, organization, village, appearance, arena_view, charge, dog_count);
    }
    smth(arena) {
        let result;
        result = Action(arena);
        return result;
    }
}
