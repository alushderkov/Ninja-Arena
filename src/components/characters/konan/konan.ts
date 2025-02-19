import {boneClanNinja} from "../../../models/ninjas/fire_ninja/bone_clan";
import {Rank} from "../../../models/ninjas/ninja";
import {baseImagesPath} from "../../../models/ninjas/ninja";

export const Konan = new boneClanNinja("Konan", 1300, 400, Rank.C, "akatsuki",
  "Amegakure", `${baseImagesPath}/konan/images/konan_ava.jpg`,
  `${baseImagesPath}/konan/images/konan_arena.jpg`, 1.5, 100, false);
