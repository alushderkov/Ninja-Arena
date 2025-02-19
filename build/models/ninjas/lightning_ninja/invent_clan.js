import { lightningNinja } from "./lightning_ninja.js";
import { Action } from "../../../assests/dom_elements/arena/opponents.js";
export class inventClanNinja extends lightningNinja {
    constructor(name, health, chakra, rank, organization, village, appearance, arena_view, charge, iq) {
        super(name, health, chakra, rank, organization, village, appearance, arena_view, charge);
        this._iq = iq;
    }
    get iq() { return this._iq; }
    developHP(arena) {
        let result;
        result = Action(arena);
        return result;
    }
}
export class engineer extends inventClanNinja {
    constructor(name, health, chakra, rank, organization, village, appearance, arena_view, charge, iq) {
        super(name, health, chakra, rank, organization, village, appearance, arena_view, charge, iq);
    }
    smth(arena) {
        let result;
        result = Action(arena);
        return result;
    }
}
export class chemist extends inventClanNinja {
    constructor(name, health, chakra, rank, organization, village, appearance, arena_view, charge, iq) {
        super(name, health, chakra, rank, organization, village, appearance, arena_view, charge, iq);
    }
    smth(arena) {
        let result;
        result = Action(arena);
        return result;
    }
}
