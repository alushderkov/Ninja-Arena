import {boneClanNinja} from "../../../models/ninjas/fire_ninja/bone_clan";
import {Rank} from "../../../models/ninjas/ninja";
import {baseImagesPath} from "../../../models/ninjas/ninja";

export const Konan = new boneClanNinja({
  name: "Konan",
  health: 1300,
  chakra: 400,
  rank: Rank.C,
  organization: "akatsuki",
  village: "Amegakure",
  appearance: `${baseImagesPath}/konan/images/konan_ava.jpg`,
  arena_view: `${baseImagesPath}/konan/images/konan_arena.jpg`,
  flame_power: 1.5,
  bone_count: 100,
  cursed_mark: false
});
