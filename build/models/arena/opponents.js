class Fighter {
    constructor(nameCharacter, healthFromCharacter, chakraFromCharacter) {
        this._name = nameCharacter;
        this._health = healthFromCharacter;
        this._chakra = chakraFromCharacter;
        this._damage_rate = 1;
        this._order = false;
    }
    get name() { return this._name; }
    get health() { return this._health; }
    get chakra() { return this._chakra; }
    get damageRate() { return this._damage_rate; }
    get order() { return this._order; }
    set name(aString) { this._name = aString; }
    set health(aNumber) { this._health = aNumber; }
    set chakra(aNumber) { this._chakra = aNumber; }
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
export function Action(arena) {
    let result;
    result = arena;
    result.enemy.health -= 150;
    result.you.chakra -= 120;
    result.enemy.chakra += 100;
    return result;
}
