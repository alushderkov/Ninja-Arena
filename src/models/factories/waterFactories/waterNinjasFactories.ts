import {AbstractNinjaFactory} from "../general/abstractNinjaFactory";
import {waterNinja} from "../../ninjas/water_ninja/water_ninja";
import {illusionClanNinja} from "../../ninjas/water_ninja/illusion_clan";
import {shadowClanNinja} from "../../ninjas/water_ninja/shadow_clan";

export class WaterNinjaFactory implements AbstractNinjaFactory {
  createNinja(data: any): waterNinja {
    return new waterNinja(data.name, data.health, data.chakra,
      data.rank, data.organization, data.village,
      data.appearance, data.arena_view, data.water_volume);
  }

}

export class IllusionClanNinjaFactory extends WaterNinjaFactory {
  createNinja(data: any): illusionClanNinja {
    return new illusionClanNinja(data.name, data.health, data.chakra,
      data.rank, data.organization, data.village, data.appearance,
      data.arena_view, data.water_volume, data.eye_level);
  }

}

export class ShadowClanNinjaFactory extends WaterNinjaFactory {
  createNinja(data: any): shadowClanNinja {
    return new shadowClanNinja(data.name, data.health, data.chakra,
      data.rank, data.organization, data.village, data.appearance,
      data.arena_view, data.water_volume, data.shadow_size);
  }

}
