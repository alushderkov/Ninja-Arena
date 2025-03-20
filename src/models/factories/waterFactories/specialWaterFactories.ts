import {IllusionClanNinjaFactory, ShadowClanNinjaFactory} from "./waterNinjasFactories";
import {absorber, clairvoyant} from "../../ninjas/water_ninja/illusion_clan";
import {shadowGhost, shadowMaster} from "../../ninjas/water_ninja/shadow_clan";

export class ClairvoyantFactory extends IllusionClanNinjaFactory {
  createNinja(data: any): clairvoyant {
    return new clairvoyant(data.name, data.health, data.chakra,
      data.rank, data.organization, data.village, data.appearance,
      data.arena_view, data.water_volume, data.eye_level);
  }

}

export class AbsorberFactory extends IllusionClanNinjaFactory {
  createNinja(data: any): absorber {
    return new absorber(data.name, data.health, data.chakra,
      data.rank, data.organization, data.village, data.appearance,
      data.arena_view, data.water_volume, data.eye_level);
  }

}

export class ShadowMasterFactory extends ShadowClanNinjaFactory {
  createNinja(data: any): shadowMaster {
    return new shadowMaster(data.name, data.health, data.chakra,
      data.rank, data.organization, data.village, data.appearance,
      data.arena_view, data.water_volume, data.shadow_size);
  }

}

export class ShadowGhostFactory extends ShadowClanNinjaFactory {
  createNinja(data: any): shadowGhost {
    return new shadowGhost(data.name, data.health, data.chakra,
      data.rank, data.organization, data.village, data.appearance,
      data.arena_view, data.water_volume, data.shadow_size);
  }

}
