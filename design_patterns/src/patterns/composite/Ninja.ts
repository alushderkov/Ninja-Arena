import { NinjaComponent } from "./NinjaComponent";

export class Ninja implements NinjaComponent {
  constructor(public name: string, public weapon: string) {}

  display(indent: number): void {
    console.log(`${' '.repeat(indent)}Ниндзя: ${this.name}, Оружие: ${this.weapon}`);
  }
}