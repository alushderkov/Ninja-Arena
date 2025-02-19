import {Opponents} from "../../arena/opponents";

export function fireBall(arena: Opponents): Opponents {
  let result: Opponents;

  result = arena;
  result.enemy.health -= 280;
  result.you.chakra -= 100;
  result.enemy.chakra += 150;

  return result;
}

export function heartOfHell(arena: Opponents): Opponents {
  let result: Opponents;

  result = arena;
  result.you.health += 150;
  result.you.chakra -= 120;

  return result;
}

export function fireDestruction(arena: Opponents): Opponents {
  let result: Opponents;

  result = arena;
  result.enemy.health -= 600;
  result.you.chakra -= 450;
  result.enemy.chakra += 600;

  return result;
}
