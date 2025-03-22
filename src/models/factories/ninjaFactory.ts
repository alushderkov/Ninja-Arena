import { Ninja } from "../ninjas/ninja";
import { fireNinja } from "../ninjas/fire_ninja/fire_ninja";
import { eyesClanNinja } from "../ninjas/fire_ninja/eyes_clan";
import { boneClanNinja } from "../ninjas/fire_ninja/bone_clan";
import { devilEyeNinja } from "../ninjas/fire_ninja/eyes_clan";
import { sensorNinja } from "../ninjas/fire_ninja/eyes_clan";
import { bonesInfinity } from "../ninjas/fire_ninja/bone_clan";
import { denseBone } from "../ninjas/fire_ninja/bone_clan";
import { lightningNinja } from "../ninjas/lightning_ninja/lightning_ninja";
import { insectClanNinja } from "../ninjas/lightning_ninja/insect_clan";
import { inventClanNinja } from "../ninjas/lightning_ninja/invent_clan";
import { beeKeeper } from "../ninjas/lightning_ninja/insect_clan";
import { antKing } from "../ninjas/lightning_ninja/insect_clan";
import { engineer } from "../ninjas/lightning_ninja/invent_clan";
import { chemist } from "../ninjas/lightning_ninja/invent_clan";
import { waterNinja } from "../ninjas/water_ninja/water_ninja";
import { illusionClanNinja } from "../ninjas/water_ninja/illusion_clan";
import { shadowClanNinja } from "../ninjas/water_ninja/shadow_clan";
import { clairvoyant } from "../ninjas/water_ninja/illusion_clan";
import { absorber } from "../ninjas/water_ninja/illusion_clan";
import { shadowMaster } from "../ninjas/water_ninja/shadow_clan";
import { shadowGhost } from "../ninjas/water_ninja/shadow_clan";
import { windNinja } from "../ninjas/wind_ninja/wind_ninja";
import { huntingClanNinja } from "../ninjas/wind_ninja/hunting_clan";
import { medicalClanNinja } from "../ninjas/wind_ninja/medical_clan";
import { wolfHunters } from "../ninjas/wind_ninja/hunting_clan";
import { birdwatchers } from "../ninjas/wind_ninja/hunting_clan";
import { militaryDoctor } from "../ninjas/wind_ninja/medical_clan";
import { neurosurgeon } from "../ninjas/wind_ninja/medical_clan";

(globalThis as any).fireNinja = fireNinja;
(globalThis as any).eyesClanNinja = eyesClanNinja;
(globalThis as any).boneClanNinja = boneClanNinja;
(globalThis as any).devilEyeNinja = devilEyeNinja;
(globalThis as any).sensorNinja = sensorNinja;
(globalThis as any).bonesInfinity = bonesInfinity;
(globalThis as any).denseBone = denseBone;
(globalThis as any).lightningNinja = lightningNinja;
(globalThis as any).insectClanNinja = insectClanNinja;
(globalThis as any).inventClanNinja = inventClanNinja;
(globalThis as any).beeKeeper = beeKeeper;
(globalThis as any).antKing = antKing;
(globalThis as any).engineer = engineer;
(globalThis as any).chemist = chemist;
(globalThis as any).waterNinja = waterNinja;
(globalThis as any).illusionClanNinja = illusionClanNinja;
(globalThis as any).shadowClanNinja = shadowClanNinja;
(globalThis as any).clairvoyant = clairvoyant;
(globalThis as any).absorber = absorber;
(globalThis as any).shadowMaster = shadowMaster;
(globalThis as any).shadowGhost = shadowGhost;
(globalThis as any).windNinja = windNinja;
(globalThis as any).huntingClanNinja = huntingClanNinja;
(globalThis as any).medicalClanNinja = medicalClanNinja;
(globalThis as any).wolfHunters = wolfHunters;
(globalThis as any).birdwatchers = birdwatchers;
(globalThis as any).militaryDoctor = militaryDoctor;
(globalThis as any).neurosurgeon = neurosurgeon;

export function createDynamicNinja(className: string, data: any): Ninja {
  const NinjaClass = (globalThis as any)[className];

  if (!NinjaClass) {
    throw new Error(`Class "${className}" not found.`);
  }

  return new NinjaClass(data);
}