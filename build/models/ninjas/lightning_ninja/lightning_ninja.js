import { Ninja } from "../ninja.js";
import { lightningBolt, electricalDischarge, thunder } from "./lightning_powers.js";
export class lightningNinja extends Ninja {
    constructor(name, health, chakra, rank, organization, village, appearance, arena_view, charge) {
        super(name, health, chakra, rank, organization, village, appearance, arena_view);
        this._charge = charge;
    }
    get charge() { return this._charge; }
    attack(arena) {
        return lightningBolt(arena);
    }
    regenerate(arena) {
        return electricalDischarge(arena);
    }
    superpower(arena) {
        return thunder(arena);
    }
}
