import {AbstractNinjaFactory} from "../general/abstractNinjaFactory";
import {fireNinja} from "../../ninjas/fire_ninja/fire_ninja";
import {eyesClanNinja} from "../../ninjas/fire_ninja/eyes_clan";
import {boneClanNinja} from "../../ninjas/fire_ninja/bone_clan";

export class FireNinjaFactory implements AbstractNinjaFactory {
  createNinja(data: any): fireNinja {
    return new fireNinja(data.name, data.health, data.chakra,
      data.rank, data.organization, data.village,
      data.appearance, data.arena_view, data.flame_power);

  }
}

export class EyesClanNinjaFactory extends FireNinjaFactory {
  createNinja(data: any): eyesClanNinja {
    return new eyesClanNinja(data.name, data.health, data.chakra,
      data.rank, data.organization, data.village, data.appearance,
      data.arena_view, data.flame_power, data.eye_level);
  }

}

export class BoneClanNinjaFactory extends FireNinjaFactory {
  createNinja(data: any): boneClanNinja {
    return new boneClanNinja(data.name, data.health, data.chakra,
      data.rank, data.organization, data.village, data.appearance,
      data.arena_view, data.flame_power, data.bone_count, data.cursed_mark);
  }

}
