import * as readline from 'readline-sync';
import { NinjaBuilder } from "../patterns/builder/NinjaBuilder";
import { NinjaGroup } from "../patterns/composite/NinjaGroup";

export class NinjaApp {
  private builder = new NinjaBuilder();
  private rootGroup?: NinjaGroup;
  private currentGroup?: NinjaGroup;
  private groupStack: NinjaGroup[] = [];

  start() {
    console.log("=== Ниндзя-Конструктор ===");
    this.mainMenu();
  }

  private mainMenu() {
    while (true) {
      console.log(`\nТекущая группа: ${this.currentGroup?.name || 'Корень'}`);
      console.log("Главное меню:");
      console.log("1. Создать новый отряд");
      console.log("2. Добавить ниндзя");
      console.log("3. Добавить подгруппу");
      console.log("4. Показать структуру");
      console.log("5. Вернуться на уровень выше");
      console.log("6. Выход");

      const choice = readline.question("Выберите действие: ");

      switch (choice) {
        case '1':
          this.createGroup();
          break;
        case '2':
          this.addNinja();
          break;
        case '3':
          this.addSubgroup();
          break;
        case '4':
          this.displayStructure();
          break;
        case '5':
          this.goUp();
          break;
        case '6':
          return;
        default:
          console.log("Неверный ввод!");
      }
    }
  }

  private createGroup() {
    const name = readline.question("Введите название отряда: ");
    this.builder = new NinjaBuilder();
    this.rootGroup = this.builder.createGroup(name).build();
    this.currentGroup = this.rootGroup;
    this.groupStack = [];
    console.log(`Отряд "${name}" создан!`);
  }

  private addNinja() {
    if (!this.currentGroup) {
      console.log("Сначала создайте отряд!");
      return;
    }

    const name = readline.question("Имя ниндзя: ");
    const weapon = readline.question("Оружие: ");
    this.builder.addNinja(name, weapon);
    console.log(`Ниндзя ${name} добавлен!`);
  }

  private addSubgroup() {
    if (!this.builder) {
      console.log("Сначала создайте отряд!");
      return;
    }

    const name = readline.question("Название подгруппы: ");
    this.builder.addSubgroup(name);
    console.log(`Подгруппа "${name}" создана!`);
  }

  private goUp() {
    if (this.builder) {
      this.builder.up();
      console.log("Поднялись на уровень выше");
    }
  }

  private displayStructure() {
    if (!this.rootGroup) {
      console.log("Нет структуры для отображения!");
      return;
    }

    console.log("\n=== Структура отряда ===");
    this.rootGroup.display(0);
  }
}