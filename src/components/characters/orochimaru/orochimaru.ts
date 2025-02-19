import {engineer} from "../../../models/ninjas/lightning_ninja/invent_clan";
import {Rank} from "../../../models/ninjas/ninja";
import {baseImagesPath} from "../../../models/ninjas/ninja";

export const Orochimaru = new engineer("Orochimaru", 2000, 800, Rank.S,
  "sanins", "Konohagakure",
  `${baseImagesPath}/orochimaru/images/orochimaru_ava.jpg`,
  `${baseImagesPath}/orochimaru/images/orochimaru_arena.jpg`,
  1, 300);
