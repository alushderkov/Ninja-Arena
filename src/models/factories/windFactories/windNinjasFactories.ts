import {AbstractNinjaFactory} from "../general/abstractNinjaFactory";
import {windNinja} from "../../ninjas/wind_ninja/wind_ninja";
import {huntingClanNinja} from "../../ninjas/wind_ninja/hunting_clan";
import {medicalClanNinja} from "../../ninjas/wind_ninja/medical_clan";

export class WindNinjaFactory implements AbstractNinjaFactory {
  createNinja(data: any): windNinja {
    return new windNinja(data.name, data.health, data.chakra,
      data.rank, data.organization, data.village,
      data.appearance, data.arena_view, data.wind_speed);
  }

}

export class HuntingClanNinjaFactory extends WindNinjaFactory {
  createNinja(data: any): huntingClanNinja {
    return new huntingClanNinja(data.name, data.health, data.chakra,
      data.rank, data.organization, data.village, data.appearance,
      data.arena_view, data.wind_speed, data.dog_count);
  }

}

export class MedicalClanNinjaFactory extends WindNinjaFactory {
  createNinja(data: any): medicalClanNinja {
    return new medicalClanNinja(data.name, data.health, data.chakra,
      data.rank, data.organization, data.village, data.appearance,
      data.arena_view, data.wind_speed, data.experience);
  }

}
