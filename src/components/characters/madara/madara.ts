import {illusionClanNinja} from "../../../models/ninjas/water_ninja/illusion_clan";
import {Rank} from "../../../models/ninjas/ninja";
import {baseImagesPath} from "../../../models/ninjas/ninja";

export const Madara = new illusionClanNinja({
  name: "Madara",
  health: 1800,
  chakra: 800,
  rank: Rank.C,
  organization: "none",
  village: "Konohagakure",
  appearance: `${baseImagesPath}/madara/images/madara_ava.jpg`,
  arena_view: `${baseImagesPath}/madara/images/madara_arena.jpg`,
  water_volume: 3,
  eye_level: 5
});
