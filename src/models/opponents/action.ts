import {Opponents} from "./opponents";

export function Action(arena: Opponents): Opponents {
  let result: Opponents;

  result = arena;
  result.enemy.health -= 150;
  result.you.chakra -= 120;
  result.enemy.chakra += 100;

  return result;
}