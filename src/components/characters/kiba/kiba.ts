import {wolfHunters} from "../../../models/ninjas/wind_ninja/hunting_clan";
import {Rank} from "../../../models/ninjas/ninja";
import {baseImagesPath} from "../../../models/ninjas/ninja";

export const Kiba = new wolfHunters({
  name: "Kiba",
  health: 900,
  chakra: 500,
  rank: Rank.B,
  organization: "none",
  village: "Konohagakure",
  appearance: `${baseImagesPath}/kiba/images/kiba_ava.jpg`,
  arena_view: `${baseImagesPath}/kiba/images/kiba_arena.jpg`,
  wind_speed: 1,
  dog_count: 15
});
