import {neurosurgeon} from "../../../models/ninjas/wind_ninja/medical_clan";
import {Rank} from "../../../models/ninjas/ninja";
import {baseImagesPath} from "../../../models/ninjas/ninja";

export const Tsunade = new neurosurgeon("Tsunade",1500, 1000, Rank.K,
  "sanins", "Konohagakure",
  `${baseImagesPath}/tsunade/images/tsunade_ava.jpg`,
  `${baseImagesPath}/tsunade/images/tsunade_arena.jpg`, 1.5, 3);
