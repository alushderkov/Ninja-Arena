import {engineer} from "../../../models/ninjas/lightning_ninja/invent_clan";
import {Rank} from "../../../models/ninjas/ninja";
import {baseImagesPath} from "../../../models/ninjas/ninja";

export const Orochimaru = new engineer({
  name: "Orochimaru",
  health: 2000,
  chakra: 800,
  rank: Rank.S,
  organization: "sanins",
  village: "Konohagakure",
  appearance: `${baseImagesPath}/orochimaru/images/orochimaru_ava.jpg`,
  arena_view: `${baseImagesPath}/orochimaru/images/orochimaru_arena.jpg`,
  charge: 1,
  iq: 300
});
