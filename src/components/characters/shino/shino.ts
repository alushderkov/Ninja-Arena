import {antKing} from "../../../models/ninjas/lightning_ninja/insect_clan";
import {Rank} from "../../../models/ninjas/ninja";
import {baseImagesPath} from "../../../models/ninjas/ninja";

export const Shino = new antKing({
  name: "Shino",
  health: 1000,
  chakra: 600,
  rank: Rank.B,
  organization: "none",
  village: "Konohagakure",
  appearance: `${baseImagesPath}/shino/images/shino_ava.jpg`,
  arena_view: `${baseImagesPath}/shino/images/shino_arena.jpg`,
  charge: 2,
  bug_count: 1000
});
