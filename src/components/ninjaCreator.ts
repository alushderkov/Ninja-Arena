import {NinjaFactoryCreator} from "../models/factories/general/ninjaFactoryCreator";
import {Ninja} from "../models/ninjas/ninja";
import {AbstractNinjaFactory} from "../models/factories/general/abstractNinjaFactory";

export function createNinja(
  event: Event,
  form: HTMLFormElement,
  Container: Array<Ninja>,
  className: string
): void {
  event.preventDefault();
  const formData = new FormData(form);
  const ninjaData: Record<string, any> = {};

  formData.forEach((value, key) => {
    ninjaData[key] = value;
  });

  try {
    const factory: AbstractNinjaFactory = NinjaFactoryCreator.getFactory(className);
    const ninja: Ninja = factory.createNinja(ninjaData);

    console.log('Object was created:', ninja);

    try {
      Container.push(ninja);
      alert(`Object ${className} created successfully!`);

    } catch (error) {
      console.log("Error adding object to container")
      alert("An error occurred while adding the object to the container.")
    }

  } catch (error) {
    console.error('Error while creating object:', error);
  }
}