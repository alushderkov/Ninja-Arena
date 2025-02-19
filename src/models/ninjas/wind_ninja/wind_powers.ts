import {Opponents} from "../../arena/opponents";

export function windBlade(arena: Opponents): Opponents {
  let result: Opponents;

  result = arena;
  result.enemy.health -= 150;
  result.you.chakra -= 100;
  result.enemy.chakra += 150;

  return result;
}

export function airEssence(arena: Opponents): Opponents {
  let result: Opponents;

  result = arena;
  result.you.health += 300;
  result.you.chakra -= 150;

  return result;
}

export function tornado(arena: Opponents): Opponents {
  let result: Opponents;

  result = arena;
  result.enemy.health -= 550;
  result.you.chakra -= 350;
  result.enemy.chakra += 600;

  return result;
}
