import {AbstractNinjaFactory} from "./abstractNinjaFactory";
import {BoneClanNinjaFactory, EyesClanNinjaFactory, FireNinjaFactory} from "../fireFactories/fireNinjasFactories";
import {
  BonesInfinityFactory,
  DenseBoneFactory,
  DevilEyeNinjaFactory,
  SensorNinjaFactory
} from "../fireFactories/specialFireFactories";
import {
  InsectClanNinjaFactory,
  InventClanNinjaFactory,
  LightningNinjaFactory
} from "../lightningFactories/lightningNinjasFactories";
import {
  AntKingFactory,
  BeeKeeperFactory,
  ChemistFactory,
  EngineerFactory
} from "../lightningFactories/specialLightningFactories";
import {
  IllusionClanNinjaFactory,
  ShadowClanNinjaFactory,
  WaterNinjaFactory
} from "../waterFactories/waterNinjasFactories";
import {
  AbsorberFactory,
  ClairvoyantFactory,
  ShadowGhostFactory,
  ShadowMasterFactory
} from "../waterFactories/specialWaterFactories";
import {HuntingClanNinjaFactory, MedicalClanNinjaFactory, WindNinjaFactory} from "../windFactories/windNinjasFactories";
import {
  BirdwatchersFactory,
  MilitaryDoctorFactory,
  NeurosurgeonFactory,
  WolfHuntersFactory
} from "../windFactories/specialWindFactories";

export class NinjaFactoryCreator {
  static getFactory(className: string): AbstractNinjaFactory {
    switch (className) {
      case 'fireNinja': return new FireNinjaFactory();
      case 'eyesClanNinja': return new EyesClanNinjaFactory();
      case 'devilEyeNinja': return new DevilEyeNinjaFactory();
      case 'sensorNinja': return new SensorNinjaFactory();
      case 'boneClanNinja': return new BoneClanNinjaFactory();
      case 'bonesInfinity': return new BonesInfinityFactory();
      case 'denseBone': return new DenseBoneFactory();
      case 'lightningNinja': return new LightningNinjaFactory();
      case 'insectClanNinja': return new InsectClanNinjaFactory();
      case 'beeKeeper': return new BeeKeeperFactory();
      case 'antKing': return new AntKingFactory();
      case 'inventClanNinja': return new InventClanNinjaFactory();
      case 'engineer': return new EngineerFactory();
      case 'chemist': return new ChemistFactory();
      case 'waterNinja': return new WaterNinjaFactory();
      case 'illusionClanNinja': return new IllusionClanNinjaFactory();
      case 'clairvoyant': return new ClairvoyantFactory();
      case 'absorber': return new AbsorberFactory();
      case 'shadowClanNinja': return new ShadowClanNinjaFactory();
      case 'shadowMaster': return new ShadowMasterFactory();
      case 'shadowGhost': return new ShadowGhostFactory();
      case 'windNinja': return new WindNinjaFactory();
      case 'huntingClanNinja': return new HuntingClanNinjaFactory();
      case 'wolfHunters': return new WolfHuntersFactory();
      case 'birdwatchers': return new BirdwatchersFactory();
      case 'medicalClanNinja': return new MedicalClanNinjaFactory();
      case 'militaryDoctor': return new MilitaryDoctorFactory();
      case 'neurosurgeon': return new NeurosurgeonFactory();
      default: throw new Error(`Unavailable class: ${className}`);
    }
  }
}