import {antKing} from "../../../models/ninjas/lightning_ninja/insect_clan";
import {Rank} from "../../../models/ninjas/ninja";
import {baseImagesPath} from "../../../models/ninjas/ninja";

export const Torune = new antKing({
  name: "Torune",
  health: 1300,
  chakra: 1000,
  rank: Rank.C,
  organization: "anbu",
  village: "Konohagakure",
  appearance: `${baseImagesPath}/torune/images/torune_ava.jpg`,
  arena_view: `${baseImagesPath}/torune/images/torune_arena.jpg`,
  charge: 1,
  bug_count: 2000
});