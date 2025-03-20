import {HuntingClanNinjaFactory, MedicalClanNinjaFactory} from "./windNinjasFactories";
import {birdwatchers, wolfHunters} from "../../ninjas/wind_ninja/hunting_clan";
import {militaryDoctor, neurosurgeon} from "../../ninjas/wind_ninja/medical_clan";

export class WolfHuntersFactory extends HuntingClanNinjaFactory {
  createNinja(data: any): wolfHunters {
    return new wolfHunters(data.name, data.health, data.chakra,
      data.rank, data.organization, data.village, data.appearance,
      data.arena_view, data.wind_speed, data.dog_count);
  }

}

export class BirdwatchersFactory extends HuntingClanNinjaFactory {
  createNinja(data: any): birdwatchers {
    return new birdwatchers(data.name, data.health, data.chakra, data.rank,
      data.organization, data.village, data.appearance, data.arena_view,
      data.wind_speed, data.dog_count);
  }

}

export class MilitaryDoctorFactory extends MedicalClanNinjaFactory {
  createNinja(data: any): militaryDoctor {
    return new militaryDoctor(data.name, data.health, data.chakra,
      data.rank, data.organization, data.village, data.appearance,
      data.arena_view, data.wind_speed, data.experience);
  }

}

export class NeurosurgeonFactory extends MedicalClanNinjaFactory {
  createNinja(data: any): neurosurgeon {
    return new neurosurgeon(data.name, data.health, data.chakra,
      data.rank, data.organization, data.village, data.appearance,
      data.arena_view, data.wind_speed, data.experience);
  }

}
