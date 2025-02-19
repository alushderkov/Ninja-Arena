export function fireBall(arena) {
    let result;
    result = arena;
    result.enemy.health -= 280;
    result.you.chakra -= 100;
    result.enemy.chakra += 150;
    return result;
}
export function heartOfHell(arena) {
    let result;
    result = arena;
    result.you.health += 150;
    result.you.chakra -= 120;
    return result;
}
export function fireDestruction(arena) {
    let result;
    result = arena;
    result.enemy.health -= 600;
    result.you.chakra -= 450;
    result.enemy.chakra += 600;
    return result;
}
