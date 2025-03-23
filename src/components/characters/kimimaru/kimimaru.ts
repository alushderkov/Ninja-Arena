import {bonesInfinity} from "../../../models/ninjas/fire_ninja/bone_clan";
import {Rank} from "../../../models/ninjas/ninja";
import {baseImagesPath} from "../../../models/ninjas/ninja";

export const Kimimaru = new bonesInfinity({
  name: "Kimimaru",
  health: 600,
  chakra: 900,
  rank: Rank.C,
  organization: "orodevils",
  village: "Konohagakure",
  appearance: `${baseImagesPath}/kimimaru/images/kimimaru_ava.jpg`,
  arena_view: `${baseImagesPath}/kimimaru/images/kimimaru_arena.jpg`,
  flame_power: 2,
  bone_count: 500,
  cursed_mark: true
});
