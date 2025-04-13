export async function createHierarchy(pathToJSON) {
  let result;

  const responseData = await fetch(pathToJSON);
  result = await responseData.json();

  return result.classes;
}