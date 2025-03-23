import {clairvoyant} from "../../../models/ninjas/water_ninja/illusion_clan";
import {Rank} from "../../../models/ninjas/ninja";
import {baseImagesPath} from "../../../models/ninjas/ninja";

export const Itachi = new clairvoyant({
  name: "Itachi",
  health: 1200,
  chakra: 600,
  rank: Rank.C,
  organization: "akatsuki",
  village: "Konohagakure",
  appearance: `${baseImagesPath}/itachi/images/itachi_ava.jpg`,
  arena_view: `${baseImagesPath}/itachi/images/itachi_arena.jpg`,
  water_volume: 1.5,
  eye_level: 4
});


