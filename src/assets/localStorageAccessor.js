import { prepareNinjaData } from "./ninjaData/prepare_data.js";

export class LocalStorageAccessor {

  static serializeContainer(container, classData) {
    const serializedContainer = container.map( ninja => prepareNinjaData(ninja, classData) );

    console.log('Serialized Container:', serializedContainer);
    localStorage.setItem('Container', JSON.stringify(serializedContainer));
  }

  static async deserializeContainer(container) {
    let result;
    let {createDynamicNinja} = await import('../../build/models/factories/ninjaFactory.js');
    const savedContainerData = JSON.parse(localStorage.getItem('Container'));

    console.log('Restored Container:', savedContainerData);

    if (savedContainerData) {
      result = savedContainerData.map( ({ type, data }) => { return createDynamicNinja(type, data) } );
    } else {
      result = container;
    }

    return result;
  }

}