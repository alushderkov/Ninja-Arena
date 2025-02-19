import {birdwatchers} from "../../../models/ninjas/wind_ninja/hunting_clan";
import {Rank} from "../../../models/ninjas/ninja";
import {baseImagesPath} from "../../../models/ninjas/ninja";

export const Jiraiya = new birdwatchers("Jiraiya", 1400, 800, Rank.S, "sanins",
  "Konohagakure", `${baseImagesPath}/jiraiya/images/jiraiya_ava.jpg`,
  `${baseImagesPath}/jiraiya/images/jiraiya_arena.jpg`, 2, 10);
