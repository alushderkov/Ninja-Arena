import {wolfHunters} from "../../../models/ninjas/wind_ninja/hunting_clan";
import {Rank} from "../../../models/ninjas/ninja";
import {baseImagesPath} from "../../../models/ninjas/ninja";

export const Kiba = new wolfHunters("Kiba", 900, 500, Rank.B, "none",
  "Konohagakure", `${baseImagesPath}/kiba/images/kiba_ava.jpg`,
  `${baseImagesPath}/kiba/images/kiba_arena.jpg`, 1, 15);
