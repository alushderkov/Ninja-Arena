export function lightningBolt(arena) {
    let result;
    result = arena;
    result.enemy.health -= 250;
    result.you.chakra -= 100;
    result.enemy.chakra += 150;
    return result;
}
export function electricalDischarge(arena) {
    let result;
    result = arena;
    result.you.health += 190;
    result.you.chakra -= 120;
    return result;
}
export function thunder(arena) {
    let result;
    result = arena;
    result.enemy.health -= 500;
    result.you.chakra -= 350;
    result.enemy.chakra += 500;
    return result;
}
