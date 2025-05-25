export interface NinjaComponent {
  name: string;
  display(indent: number): void;
}