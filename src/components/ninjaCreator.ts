import {NinjaFactoryCreator} from "../models/factories/general/ninjaFactoryCreator";

export function createNinja(event: Event, form: HTMLFormElement /*, [Container]*/): void {
  event.preventDefault();
  const formData = new FormData(form);
  const ninjaData: Record<string, any> = {};

  formData.forEach((value, key) => {
    ninjaData[key] = value;
  });

  const className = formData.get('class') as string;

  try {
    const factory = NinjaFactoryCreator.getFactory(className);
    const ninja = factory.createNinja(ninjaData);
    // todo: логика добавления ниндзя
    console.log('Создан объект:', ninja);
    alert(`Объект ${className} успешно создан!`);

  } catch (error) {

    console.error('Ошибка при создании объекта:', error);
    alert('Ошибка при создании объекта. Проверьте введенные данные.');
  }
}