import {neurosurgeon} from "../../../models/ninjas/wind_ninja/medical_clan";
import {Rank} from "../../../models/ninjas/ninja";
import {baseImagesPath} from "../../../models/ninjas/ninja";

export const Tsunade = new neurosurgeon({
  name: "Tsunade",
  health: 1500,
  chakra: 1000,
  rank: Rank.K,
  organization: "sanins",
  village: "Konohagakure",
  appearance: `${baseImagesPath}/tsunade/images/tsunade_ava.jpg`,
  arena_view: `${baseImagesPath}/tsunade/images/tsunade_arena.jpg`,
  wind_speed: 1.5,
  experience: 3
});
