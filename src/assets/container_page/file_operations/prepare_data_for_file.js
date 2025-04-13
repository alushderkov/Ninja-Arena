import { prepareNinjaData } from "../../ninjaData/prepare_data.js";

export function prepareForFile(container, classData) {
  return container.map( ninja => prepareNinjaData(ninja, classData) );
}