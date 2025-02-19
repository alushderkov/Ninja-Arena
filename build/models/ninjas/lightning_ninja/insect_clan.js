import { lightningNinja } from "./lightning_ninja.js";
import { Action } from "../../arena/opponents.js";
export class insectClanNinja extends lightningNinja {
    constructor(name, health, chakra, rank, organization, village, appearance, arena_view, charge, bug_count) {
        super(name, health, chakra, rank, organization, village, appearance, arena_view, charge);
        this["_bug count"] = bug_count;
    }
    get bugCount() { return this["_bug count"]; }
    bugStorm(arena) {
        let result;
        result = Action(arena);
        return result;
    }
}
export class beeKeeper extends insectClanNinja {
    constructor(name, health, chakra, rank, organization, village, appearance, arena_view, charge, bug_count) {
        super(name, health, chakra, rank, organization, village, appearance, arena_view, charge, bug_count);
    }
    smth(arena) {
        let result;
        result = Action(arena);
        return result;
    }
}
export class antKing extends insectClanNinja {
    constructor(name, health, chakra, rank, organization, village, appearance, arena_view, charge, bug_count) {
        super(name, health, chakra, rank, organization, village, appearance, arena_view, charge, bug_count);
    }
    smth(arena) {
        let result;
        result = Action(arena);
        return result;
    }
}
