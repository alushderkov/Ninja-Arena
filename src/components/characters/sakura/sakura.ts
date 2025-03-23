import {militaryDoctor} from "../../../models/ninjas/wind_ninja/medical_clan";
import {Rank} from "../../../models/ninjas/ninja";
import {baseImagesPath} from "../../../models/ninjas/ninja";

export const Sakura = new militaryDoctor({
  name: "Sakura",
  health: 1300,
  chakra: 600,
  rank: Rank.B,
  organization: "none",
  village: "Konohagakure",
  appearance: `${baseImagesPath}/sakura/images/sakura_ava.jpg`,
  arena_view: `${baseImagesPath}/sakura/images/sakura_arena.jpg`,
  wind_speed: 1,
  experience: 1
});
