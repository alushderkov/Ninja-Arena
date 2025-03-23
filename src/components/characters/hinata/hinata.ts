import {sensorNinja} from "../../../models/ninjas/fire_ninja/eyes_clan";
import {Rank} from "../../../models/ninjas/ninja";
import {baseImagesPath} from "../../../models/ninjas/ninja";

export const Hinata = new sensorNinja({
  name: 'Hinata',
  health: 800,
  chakra: 400,
  rank: Rank.A,
  organization: 'none',
  village: 'Konohagakure',
  appearance: `${baseImagesPath}/hinata/images/hinata_ava.jpg`,
  arena_view: `${baseImagesPath}/hinata/images/hinata_arena.jpg`,
  flame_power: 0.8,
  eye_level: 1
});


