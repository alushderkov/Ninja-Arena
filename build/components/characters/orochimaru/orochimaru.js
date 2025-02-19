import { engineer } from "../../../models/ninjas/lightning_ninja/invent_clan.js";
import { Rank } from "../../../models/ninjas/ninja.js";
import { baseImagesPath } from "../../../models/ninjas/ninja.js";
export const Orochimaru = new engineer("Orochimaru", 2000, 800, Rank.S, "sanins", "Konohagakure", `${baseImagesPath}/orochimaru/images/orochimaru_ava.jpg`, `${baseImagesPath}/orochimaru/images/orochimaru_arena.jpg`, 1, 300);
