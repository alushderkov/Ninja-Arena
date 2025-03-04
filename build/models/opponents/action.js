export function Action(arena) {
    let result;
    result = arena;
    result.enemy.health -= 150;
    result.you.chakra -= 120;
    result.enemy.chakra += 100;
    return result;
}
