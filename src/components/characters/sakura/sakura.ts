import {militaryDoctor} from "../../../models/ninjas/wind_ninja/medical_clan";
import {Rank} from "../../../models/ninjas/ninja";
import {baseImagesPath} from "../../../models/ninjas/ninja";

export const Sakura = new militaryDoctor("Sakura", 1300, 600, Rank.B, "none",
  "Konohagakure", `${baseImagesPath}/sakura/images/sakura_ava.jpg`,
  `${baseImagesPath}/sakura/images/sakura_arena.jpg`, 1, 1);
