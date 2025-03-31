export class LocalStorageAccessor {

  static serializeContainer(container, classData) {
    const serializedContainer = container.map(ninja => {
      const baseData = {
        name: ninja.name,
        health: ninja.health,
        chakra: ninja.chakra,
        rank: ninja.rank,
        organization: ninja.organization,
        village: ninja.village,
        appearance: ninja.appearance,
        arenaView: ninja.arenaView,
      };

      const classInfo = classData[ninja.constructor.name];
      if (classInfo && classInfo.fields) {
        classInfo.fields.forEach(field => {
          baseData[field.name] = ninja[field.name];
        });
      }

      return {
        type: ninja.constructor.name,
        data: baseData,
      };
    });

    console.log('Serialized Container:', serializedContainer);
    localStorage.setItem('Container', JSON.stringify(serializedContainer));
  }

  static async deserializeContainer(container) {
    let result;
    let {createDynamicNinja} = await import('../../build/models/factories/ninjaFactory.js');
    const savedContainerData = JSON.parse(localStorage.getItem('Container'));

    console.log('Restored Container:', savedContainerData);

    if (savedContainerData) {
      result = savedContainerData.map(({ type, data }) => { return createDynamicNinja(type, data) } );
    } else {
      result = container;
    }

    return result;
  }

}
