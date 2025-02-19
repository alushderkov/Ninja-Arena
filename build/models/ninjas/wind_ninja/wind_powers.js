export function windBlade(arena) {
    let result;
    result = arena;
    result.enemy.health -= 150;
    result.you.chakra -= 100;
    result.enemy.chakra += 150;
    return result;
}
export function airEssence(arena) {
    let result;
    result = arena;
    result.you.health += 300;
    result.you.chakra -= 150;
    return result;
}
export function tornado(arena) {
    let result;
    result = arena;
    result.enemy.health -= 550;
    result.you.chakra -= 350;
    result.enemy.chakra += 600;
    return result;
}
