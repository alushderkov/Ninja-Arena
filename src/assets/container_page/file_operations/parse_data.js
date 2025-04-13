import { createHierarchy } from "../../ninjaData/processNinjaData.js";
import { shouldParseAsJson, validateNinjaObject, validateNinjaType } from "./check_data.js";

function parseTxtContent(content) {
  const lines = content.split('\n');
  const result = [];
  let currentNinja = null;

  for (const line of lines) {

    if (line.startsWith('Type: ')) {

      if (currentNinja) {
        result.push(currentNinja);
      }

      currentNinja = { type: line.substring(6).trim(), data: {} };

    } else if (currentNinja && line.includes(': ')) {
      const [key, value] = line.split(': ').map(s => s.trim());

      currentNinja.data[key.toLowerCase()] = isNaN(value) ? value : Number(value);
    }
  }

  if (currentNinja) {
    result.push(currentNinja);
  }

  return result;
}

async function parseJsonContent(content) {
  const parsedData = JSON.parse(content);
  if (!Array.isArray(parsedData)) {
    throw new Error("Invalid JSON format: expected array of ninjas");
  }
  return parsedData;
}

async function validateData(data, classData) {

  return data.map(item => {
    const validatedItem = validateNinjaObject(item);

    return validateNinjaType(validatedItem, classData);
  });
}

export async function parseFileContent(file, content) {
  let parsedData;

  if ( shouldParseAsJson(file, content) ) {
    parsedData = await parseJsonContent(content);
  } else {
    parsedData = parseTxtContent(content);
  }

  const classData = await createHierarchy('../ninjaData/classes.json');

  return validateData(parsedData, classData);
}