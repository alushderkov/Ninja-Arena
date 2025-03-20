import {BoneClanNinjaFactory, EyesClanNinjaFactory} from "./fireNinjasFactories";
import {devilEyeNinja, sensorNinja} from "../../ninjas/fire_ninja/eyes_clan";
import {bonesInfinity, denseBone} from "../../ninjas/fire_ninja/bone_clan";

export class DevilEyeNinjaFactory extends EyesClanNinjaFactory {
  createNinja(data: any): devilEyeNinja {
    return new devilEyeNinja(data.name, data.health, data.chakra,
      data.rank, data.organization, data.village, data.appearance,
      data.arena_view, data.flame_power, data.eye_level);
  }

}

export class SensorNinjaFactory extends EyesClanNinjaFactory {
  createNinja(data: any): sensorNinja {
    return new sensorNinja(data.name, data.health, data.chakra,
      data.rank, data.organization, data.village, data.appearance,
      data.arena_view, data.flame_power, data.eye_level);
  }

}

export class BonesInfinityFactory extends BoneClanNinjaFactory {
  createNinja(data: any): bonesInfinity {
    return new bonesInfinity(data.name, data.health, data.chakra,
      data.rank, data.organization, data.village, data.appearance,
      data.arena_view, data.flame_power, data.bone_count, data.cursed_mark);
  }

}

export class DenseBoneFactory extends BoneClanNinjaFactory {
  createNinja(data: any): denseBone {
    return new denseBone(data.name, data.health, data.chakra,
      data.rank, data.organization, data.village, data.appearance,
      data.arena_view, data.flame_power, data.bone_count, data.cursed_mark);
  }

}
