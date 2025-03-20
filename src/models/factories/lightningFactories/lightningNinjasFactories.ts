import {AbstractNinjaFactory} from "../general/abstractNinjaFactory";
import {lightningNinja} from "../../ninjas/lightning_ninja/lightning_ninja";
import {insectClanNinja} from "../../ninjas/lightning_ninja/insect_clan";
import {inventClanNinja} from "../../ninjas/lightning_ninja/invent_clan";

export class LightningNinjaFactory implements AbstractNinjaFactory {
  createNinja(data: any): lightningNinja {
    return new lightningNinja(data.name, data.health, data.chakra,
      data.rank, data.organization, data.village,
      data.appearance, data.arena_view, data.charge);
  }

}

export class InsectClanNinjaFactory extends LightningNinjaFactory {
  createNinja(data: any): insectClanNinja {
    return new insectClanNinja(data.name, data.health, data.chakra,
      data.rank, data.organization, data.village, data.appearance,
      data.arena_view, data.charge, data.bug_count);
  }

}

export class InventClanNinjaFactory extends LightningNinjaFactory {
  createNinja(data: any): inventClanNinja {
    return new inventClanNinja(data.name, data.health, data.chakra,
      data.rank, data.organization, data.village, data.appearance,
      data.arena_view, data.charge, data.iq);
  }

}
