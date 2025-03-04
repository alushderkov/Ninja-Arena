class Fighter {
    constructor(character) {
        this._character = character;
        this._health = character.health;
        this._chakra = character.chakra;
        this._damage_rate = 1;
        this._order = false;
    }
    get character() { return this._character; }
    get health() { return this._health; }
    get chakra() { return this._chakra; }
    get damageRate() { return this._damage_rate; }
    get order() { return this._order; }
    set health(aNumber) { this._health = aNumber; }
    set chakra(aNumber) { this._chakra = aNumber; }
    set character(aNinja) { this._character = aNinja; }
    set damageRate(aNumber) { this._damage_rate = aNumber; }
    set order(aBoolean) { this._order = aBoolean; }
}
export class Opponents {
    constructor(you, enemy) {
        this._You = you;
        this._Enemy = enemy;
    }
    get you() { return this._You; }
    get enemy() { return this._Enemy; }
    set you(aFighter) { this._You = aFighter; }
    set enemy(aFighter) { this._Enemy = aFighter; }
}
