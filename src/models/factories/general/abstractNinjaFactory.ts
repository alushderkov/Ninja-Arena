import {Ninja} from "../../ninjas/ninja";

export interface AbstractNinjaFactory {
  createNinja(data: any): Ninja;
}