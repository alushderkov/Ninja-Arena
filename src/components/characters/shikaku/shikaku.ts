import {shadowGhost} from "../../../models/ninjas/water_ninja/shadow_clan";
import {Rank} from "../../../models/ninjas/ninja";
import {baseImagesPath} from "../../../models/ninjas/ninja";

export const Shikaku = new shadowGhost("Shikaku", 1000, 700, Rank.C, "none",
  "Konohagakure", `${baseImagesPath}/shikaku/images/shikaku_ava.jpg`,
  `${baseImagesPath}/shikaku/images/shikaku_arena.jpg`, 2, 2);
