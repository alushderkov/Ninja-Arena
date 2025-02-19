import {illusionClanNinja} from "../../../models/ninjas/water_ninja/illusion_clan";
import {Rank} from "../../../models/ninjas/ninja";
import {baseImagesPath} from "../../../models/ninjas/ninja";

export const Madara = new illusionClanNinja("Madara",1800, 800, Rank.C, "none",
  "Konohagakure", `${baseImagesPath}/madara/images/madara_ava.jpg`,
  `${baseImagesPath}/madara/images/madara_arena.jpg`, 3, 5);
