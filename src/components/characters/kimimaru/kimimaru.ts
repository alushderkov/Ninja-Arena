import {bonesInfinity} from "../../../models/ninjas/fire_ninja/bone_clan";
import {Rank} from "../../../models/ninjas/ninja";
import {baseImagesPath} from "../../../models/ninjas/ninja";

export const Kimimaru =
  new bonesInfinity("Kimimaru", 600, 900, Rank.C, "orodevils",
    "Konohagakure", `${baseImagesPath}/kimimaru/images/kimimaru_ava.jpg`,
    `${baseImagesPath}/kimimaru/images/kimimaru_arena.jpg`, 2, 500, true);
