export function prepareNinjaData(ninja, classData) {
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

  if (classInfo?.fields) {

    classInfo.fields.forEach(field => {
      baseData[field.name] = ninja[field.name];
    });
  }

  return {
    type: ninja.constructor.name,
    data: baseData,
  };
}