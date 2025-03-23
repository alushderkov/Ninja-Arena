import {birdwatchers} from "../../../models/ninjas/wind_ninja/hunting_clan";
import {Rank} from "../../../models/ninjas/ninja";
import {baseImagesPath} from "../../../models/ninjas/ninja";

export const Jiraiya = new birdwatchers({
  name: "Jiraiya",
  health: 1400,
  chakra: 800,
  rank: Rank.S,
  organization: "sanins",
  village: "Konohagakure",
  appearance: `${baseImagesPath}/jiraiya/images/jiraiya_ava.jpg`,
  arena_view: `${baseImagesPath}/jiraiya/images/jiraiya_arena.jpg`,
  wind_speed: 2,
  dog_count: 10
});