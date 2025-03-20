import {InsectClanNinjaFactory, InventClanNinjaFactory} from "./lightningNinjasFactories";
import {antKing, beeKeeper} from "../../ninjas/lightning_ninja/insect_clan";
import {chemist, engineer} from "../../ninjas/lightning_ninja/invent_clan";

export class BeeKeeperFactory extends InsectClanNinjaFactory {
  createNinja(data: any): beeKeeper {
    return new beeKeeper(data.name, data.health, data.chakra,
      data.rank, data.organization, data.village, data.appearance,
      data.arena_view, data.charge, data.bug_count);
  }

}

export class AntKingFactory extends InsectClanNinjaFactory {
  createNinja(data: any): antKing {
    return new antKing(data.name, data.health, data.chakra,
      data.rank, data.organization, data.village, data.appearance,
      data.arena_view, data.charge, data.bug_count);
  }

}

export class EngineerFactory extends InventClanNinjaFactory {
  createNinja(data: any): engineer {
    return new engineer(data.name, data.health, data.chakra,
      data.rank, data.organization, data.village, data.appearance,
      data.arena_view, data.charge, data.iq);
  }

}

export class ChemistFactory extends InventClanNinjaFactory {
  createNinja(data: any): chemist {
    return new chemist(data.name, data.health, data.chakra,
      data.rank, data.organization, data.village, data.appearance,
      data.arena_view, data.charge, data.iq);
  }

}
