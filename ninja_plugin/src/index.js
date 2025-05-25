import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs';

// Добавьте сразу после импортов
if (import.meta.url.endsWith(process.argv[1])) {
  if (process.argv.includes('--revert')) {
    revertCustomClass()
      .then(() => process.exit(0))
      .catch((err) => {
        console.error('Revert failed:', err);
        process.exit(1);
      });
  } else if (process.argv.includes('--install')) {
    updateCustomClass()
      .then(() => process.exit(0))
      .catch((err) => {
        console.error('Install failed:', err);
        process.exit(1);
      });
  }
}

const getProjectRoot = () => {
  let current = dirname(fileURLToPath(import.meta.url));
  while (current !== '/') {
    if (fs.existsSync(resolve(current, 'package.json'))) {
      return current;
    }
    current = resolve(current, '..');
  }
  throw new Error('Project root not found!');
};

const projectRoot = getProjectRoot();

export const updateCustomClass = () => {
  // Получаем аналог __dirname для ES-модулей
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

// 1. Анализ файла класса
  const customClassFileName = 'ExtraClass.ts';
  const customClassPath = resolve(__dirname, '../../src/models/ninjas/', customClassFileName);

  if (!fs.existsSync(customClassPath)) {
    throw new Error(`File ${customClassFileName} not found!`);
  }

  const customClassContent = fs.readFileSync(customClassPath, 'utf-8');

// Определяем имя класса
  const classNameMatch = customClassContent.match(/class (\w+) extends/);
  if (!classNameMatch) throw new Error('Class name not found in the file!');
  const className = classNameMatch[1];

// Определяем родительский класс
  const parentClassMatch = customClassContent.match(/extends (\w+)/);
  if (!parentClassMatch) throw new Error('Parent class not found in the file!');
  const parentClassName = parentClassMatch[1];

// Находим все дополнительные поля
  const fieldMatches = [...customClassContent.matchAll(/(?:public|protected|private)?\s+_?(\w+)\s*:\s*(\w+)\s*;/g)];
  const fields = fieldMatches.map(match => ({
    name: match[1],
    type: match[2].toLowerCase(),
  }));

// 2. Обновляем ninjaFactory.ts
  const ninjaFactoryPath = resolve(__dirname, '../../src/models/factories/ninjaFactory.ts');
  let ninjaFactoryContent = fs.readFileSync(ninjaFactoryPath, 'utf-8');

// Добавляем импорт
  const importStatement = `import { ${className} } from "../ninjas/${customClassFileName.replace('.ts', '')}";\n`;
  if (!ninjaFactoryContent.includes(importStatement)) {
    const lastImportIndex = ninjaFactoryContent.lastIndexOf('import');
    const insertPosition = lastImportIndex > -1
      ? ninjaFactoryContent.indexOf('\n', lastImportIndex) + 1
      : 0;
    ninjaFactoryContent = ninjaFactoryContent.slice(0, insertPosition) +
      importStatement +
      ninjaFactoryContent.slice(insertPosition);
  }

// Добавляем регистрацию в globalThis
  const exportIndex = ninjaFactoryContent.indexOf('export function createDynamicNinja');
  const lastGlobalThis = ninjaFactoryContent.lastIndexOf('(globalThis as any)', exportIndex);
  const insertGlobalAt = ninjaFactoryContent.indexOf('\n', lastGlobalThis) + 1;
  const globalRegistration = `(globalThis as any).${className} = ${className};\n`;
  ninjaFactoryContent = ninjaFactoryContent.slice(0, insertGlobalAt) +
    globalRegistration +
    ninjaFactoryContent.slice(insertGlobalAt);

  fs.writeFileSync(ninjaFactoryPath, ninjaFactoryContent);

// 3. Обновляем classes.json
  const classesJsonPath = resolve(__dirname, '../../src/assets/ninjaData/classes.json');
  const classesJson = JSON.parse(fs.readFileSync(classesJsonPath, 'utf-8'));

  if (!classesJson.classes[parentClassName]) {
    throw new Error(`Parent class "${parentClassName}" not found in classes.json!`);
  }

// Создаем запись для нового класса
  const classDefinition = {
    fields: fields.map(field => ({
      name: field.name,
      type: field.type === 'number' ? 'number' : 'text',
      placeholder: field.name.replace(/_/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase()),
      ...(field.type === 'number' ? { range: "from 0 to 1000" } : {}),
    })),
    children: [],
  };

// Добавляем в иерархию
  if (!classesJson.classes[parentClassName].children) {
    classesJson.classes[parentClassName].children = [];
  }

  if (!classesJson.classes[parentClassName].children.includes(className)) {
    classesJson.classes[parentClassName].children.push(className);
  }

  classesJson.classes[className] = classDefinition;

  fs.writeFileSync(classesJsonPath, JSON.stringify(classesJson, null, 2));

  console.log(`✅ Successfully added ${className} to the hierarchy!`);
  console.log(`Parent: ${parentClassName}`);
  console.log(`Fields: ${fields.map(f => `${f.name}:${f.type}`).join(', ')}`);
};

export const revertCustomClass = () => {

  console.log('Project root:', projectRoot); // Для отладки
  if (!fs.existsSync(resolve(projectRoot, 'package.json'))) {
    throw new Error('Invalid project root');
  }

  // Получаем аналог __dirname для ES-модулей
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

// 1. Определяем имя класса из файла
  const customClassPath = resolve(__dirname, '../../src/models/ninjas/ExtraClass.ts');
  const customClassContent = fs.readFileSync(customClassPath, 'utf-8');

// Извлекаем имя класса
  const classNameMatch = customClassContent.match(/class (\w+) extends/);
  if (!classNameMatch) throw new Error('Class name not found in the file!');
  const className = classNameMatch[1];

// 2. Удаляем класс из ninjaFactory.ts
  const ninjaFactoryPath = resolve(__dirname, '../../src/models/factories/ninjaFactory.ts');
  let ninjaFactoryContent = fs.readFileSync(ninjaFactoryPath, 'utf-8');

// Удаляем импорт класса
  ninjaFactoryContent = ninjaFactoryContent.replace(
    new RegExp(`import\\s*{\\s*${className}\\s*}\\s*from\\s*"[^"]+";?\\n`, 'g'),
    ''
  );

// Удаляем регистрацию в globalThis
  ninjaFactoryContent = ninjaFactoryContent.replace(
    new RegExp(`\\(globalThis\\s+as\\s+any\\)\\.${className}\\s*=\\s*${className};\\n`, 'g'),
    ''
  );

  fs.writeFileSync(ninjaFactoryPath, ninjaFactoryContent);

// 3. Удаляем класс из classes.json
  const classesJsonPath = resolve(__dirname, '../../src/assets/ninjaData/classes.json');
  const classesJson = JSON.parse(fs.readFileSync(classesJsonPath, 'utf-8'));

// Находим родителя класса
  let parentClass = null;
  for (const [key, value] of Object.entries(classesJson.classes)) {
    const children = value.children || [];
    if (children.includes(className)) {
      parentClass = key;
      break;
    }
  }

// Удаляем класс из children родителя
  if (parentClass) {
    classesJson.classes[parentClass].children = classesJson.classes[parentClass].children.filter(
      child => child !== className
    );
  }

// Удаляем запись класса
  delete classesJson.classes[className];

// Сохраняем обновленный JSON
  fs.writeFileSync(classesJsonPath, JSON.stringify(classesJson, null, 2));

  console.log(`✅ Successfully removed ${className} from the hierarchy!`);
  if (parentClass) console.log(`Parent class: ${parentClass}`);
  else console.log("No parent class found (may have been already removed).");
};