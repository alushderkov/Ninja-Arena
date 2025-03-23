import {shadowGhost} from "../../../models/ninjas/water_ninja/shadow_clan";
import {Rank} from "../../../models/ninjas/ninja";
import {baseImagesPath} from "../../../models/ninjas/ninja";

export const Shikaku = new shadowGhost({
  name: "Shikaku",
  health: 1000,
  chakra: 700,
  rank: Rank.C,
  organization: "none",
  village: "Konohagakure",
  appearance: `${baseImagesPath}/shikaku/images/shikaku_ava.jpg`,
  arena_view: `${baseImagesPath}/shikaku/images/shikaku_arena.jpg`,
  water_volume: 2,
  shadow_size: 2
});
