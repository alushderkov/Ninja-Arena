import {createDynamicNinja} from "../models/factories/ninjaFactory";
import {Ninja} from "../models/ninjas/ninja";

export function createNinja(
  event: Event,
  form: HTMLFormElement,
  container: Array<Ninja>,
  className: string
): void {
  event.preventDefault();
  const formData = new FormData(form);
  const ninjaData: Record<string, any> = {};

  formData.forEach((value, key) => {
    ninjaData[key] = value;
  });

  try {
    const ninja = createDynamicNinja(className, ninjaData);

    const name = ninjaData.name;
    const existingNinjaIndex = container.findIndex(n => n.name === name);

    if (existingNinjaIndex !== -1) {
      container.splice(existingNinjaIndex, 1);
      console.log(`Removed existing ninja with name ${name}`);
    }

    console.log('Object was created:', ninja);
    container.push(ninja);

    alert(`Object ${className} created successfully!`);

  } catch (error) {
    console.error('Error while creating object:', error);

    alert("Error while creating an object of a nonexistent or abstract class." +
      "\nCHOOSE EXISTENT NINJA!");
  }
}