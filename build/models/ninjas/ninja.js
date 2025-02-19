export const baseImagesPath = `../../../../src/components/characters`;
export var Rank;
(function (Rank) {
    Rank[Rank["A"] = 1] = "A";
    Rank[Rank["B"] = 2] = "B";
    Rank[Rank["C"] = 3] = "C";
    Rank[Rank["S"] = 4] = "S";
    Rank[Rank["K"] = 5] = "K";
})(Rank || (Rank = {}));
export class Ninja {
    constructor(name, health, chakra, rank, organization, village, appearance, arena_view) {
        this._name = name;
        this._health = health;
        this._chakra = chakra;
        this["_ninja rank"] = rank;
        this._organization = organization;
        this._village = village;
        this._appearance = appearance;
        this["_arena view"] = arena_view;
    }
    get name() { return this._name; }
    get health() { return this._health; }
    get chakra() { return this._chakra; }
    get rank() { return this["_ninja rank"]; }
    get organization() { return this._organization; }
    get village() { return this._village; }
    get appearance() { return this._appearance; }
    get arenaView() { return this["_arena view"]; }
    study(requirement) {
    }
    ;
    train(score) {
    }
    ;
}
