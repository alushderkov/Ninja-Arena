import {chemist} from "../../../models/ninjas/lightning_ninja/invent_clan";
import {Rank} from "../../../models/ninjas/ninja";
import {baseImagesPath} from "../../../models/ninjas/ninja";

export const Kabuto = new chemist("Kabuto", 1000, 500, Rank.C, "none",
  "Konohagakure", `${baseImagesPath}/kabuto/images/kabuto_ava.jpg`,
  `${baseImagesPath}/kabuto/images/kabuto_arena.jpg`, 1.3, 400);
