import {chemist} from "../../../models/ninjas/lightning_ninja/invent_clan";
import {Rank} from "../../../models/ninjas/ninja";
import {baseImagesPath} from "../../../models/ninjas/ninja";

export const Kabuto = new chemist({
  name: "Kabuto",
  health: 1000,
  chakra: 500,
  rank: Rank.C,
  organization: "none",
  village: "Konohagakure",
  appearance: `${baseImagesPath}/kabuto/images/kabuto_ava.jpg`,
  arena_view: `${baseImagesPath}/kabuto/images/kabuto_arena.jpg`,
  charge: 1.3,
  iq: 400
});