import {devilEyeNinja} from "../../../models/ninjas/fire_ninja/eyes_clan";
import {Rank} from "../../../models/ninjas/ninja";
import {baseImagesPath} from "../../../models/ninjas/ninja";

export const Neji = new devilEyeNinja({
  name: "Neji",
  health: 1200,
  chakra: 600,
  rank: Rank.C,
  organization: "none",
  village: "Konohagakure",
  appearance: `${baseImagesPath}/neji/images/neji_ava.jpg`,
  arena_view: `${baseImagesPath}/neji/images/neji_arena.jpg`,
  flame_power: 1.5,
  eye_level: 3
});
