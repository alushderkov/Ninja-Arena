import { Ninja } from "../ninja.js";
import { windBlade, airEssence, tornado } from "./wind_powers.js";
export class windNinja extends Ninja {
    constructor(name, health, chakra, rank, organization, village, appearance, arena_view, wind_speed) {
        super(name, health, chakra, rank, organization, village, appearance, arena_view);
        this["_wind speed"] = wind_speed;
    }
    get windSpeed() { return this["_wind speed"]; }
    attack(arena) {
        return windBlade(arena);
    }
    regenerate(arena) {
        return airEssence(arena);
    }
    superpower(arena) {
        return tornado(arena);
    }
}
