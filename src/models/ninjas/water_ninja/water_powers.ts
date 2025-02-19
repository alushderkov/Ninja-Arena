import {Opponents} from "../../../assests/dom_elements/arena/opponents";

export function waterDragon(arena: Opponents): Opponents {
  let result: Opponents;

  result = arena;
  result.enemy.health -= 200;
  result.you.chakra -= 50;
  result.enemy.chakra += 100;

  return result;
}

export function holySpring(arena: Opponents): Opponents {
  let result: Opponents;

  result = arena;
  result.you.health += 200;
  result.you.chakra -= 120;

  return result;
}

export function greatWaterfall(arena: Opponents): Opponents {
  let result: Opponents;

  result = arena;
  result.enemy.health -= 400;
  result.you.chakra -= 300;
  result.enemy.chakra += 300;

  return result;
}
