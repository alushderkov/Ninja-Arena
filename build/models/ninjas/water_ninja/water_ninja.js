import { Ninja } from "../ninja.js";
import { waterDragon, holySpring, greatWaterfall } from "./water_powers.js";
export class waterNinja extends Ninja {
    constructor(name, health, chakra, rank, organization, village, appearance, arena_view, water_volume) {
        super(name, health, chakra, rank, organization, village, appearance, arena_view);
        this["_water volume"] = water_volume;
    }
    get waterVolume() { return this["_water volume"]; }
    attack(arena) {
        return waterDragon(arena);
    }
    regenerate(arena) {
        return holySpring(arena);
    }
    superpower(arena) {
        return greatWaterfall(arena);
    }
}
