import {waterNinja} from "./water_ninja/water_ninja";
import {shadowClanNinja, shadowMaster, shadowGhost} from "./water_ninja/shadow_clan";
import {illusionClanNinja, clairvoyant, absorber} from "./water_ninja/illusion_clan";
import {windNinja} from "./wind_ninja/wind_ninja";
import {medicalClanNinja, neurosurgeon, militaryDoctor} from "./wind_ninja/medical_clan";
import {huntingClanNinja, wolfHunters, birdwatchers} from "./wind_ninja/hunting_clan";
import {lightningNinja} from "./lightning_ninja/lightning_ninja";
import {inventClanNinja, engineer, chemist} from "./lightning_ninja/invent_clan";
import {insectClanNinja, antKing, beeKeeper} from "./lightning_ninja/insect_clan";
import {fireNinja} from "./fire_ninja/fire_ninja";
import {boneClanNinja, bonesInfinity, denseBone} from "./fire_ninja/bone_clan";

export type NinjaType =
  waterNinja | fireNinja | windNinja | lightningNinja |
  shadowClanNinja | shadowMaster | shadowGhost |
  illusionClanNinja | clairvoyant | absorber |
  medicalClanNinja | neurosurgeon | militaryDoctor |
  huntingClanNinja | wolfHunters | birdwatchers |
  inventClanNinja | engineer | chemist |
  insectClanNinja | antKing | beeKeeper |
  boneClanNinja | bonesInfinity | denseBone;