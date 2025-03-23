import {shadowMaster} from "../../../models/ninjas/water_ninja/shadow_clan";
import {Rank} from "../../../models/ninjas/ninja";
import {baseImagesPath} from "../../../models/ninjas/ninja";

export const Shikamaru = new shadowMaster({
  name: "Shikamaru",
  health: 1300,
  chakra: 700,
  rank: Rank.C,
  organization: "none",
  village: "Konohagakure",
  appearance: `${baseImagesPath}/shikamaru/images/shikamaru_ava.jpg`,
  arena_view: `${baseImagesPath}/shikamaru/images/shikamaru_arena.jpg`,
  water_volume: 1.5,
  shadow_size: 1.7
});

