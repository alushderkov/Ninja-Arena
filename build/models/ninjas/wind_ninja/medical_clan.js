import { windNinja } from "./wind_ninja.js";
import { Action } from "../../../assests/dom_elements/arena/opponents.js";
export class medicalClanNinja extends windNinja {
    constructor(name, health, chakra, rank, organization, village, appearance, arena_view, charge, experience) {
        super(name, health, chakra, rank, organization, village, appearance, arena_view, charge);
        this._experience = experience;
    }
    get experience() { return this._experience; }
    superRegeneration(arena) {
        let result;
        result = Action(arena);
        return result;
    }
}
export class militaryDoctor extends medicalClanNinja {
    constructor(name, health, chakra, rank, organization, village, appearance, arena_view, charge, experience) {
        super(name, health, chakra, rank, organization, village, appearance, arena_view, charge, experience);
    }
    smth(arena) {
        let result;
        result = Action(arena);
        return result;
    }
}
export class neurosurgeon extends medicalClanNinja {
    constructor(name, health, chakra, rank, organization, village, appearance, arena_view, charge, experience) {
        super(name, health, chakra, rank, organization, village, appearance, arena_view, charge, experience);
    }
    smth(arena) {
        let result;
        result = Action(arena);
        return result;
    }
}
