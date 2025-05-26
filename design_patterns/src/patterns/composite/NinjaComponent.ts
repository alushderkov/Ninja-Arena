export interface NinjaComponent {
  name: string;
  display(indent: number): void;
  getWeapons(): Set<string>; // Добавляем новый метод
}