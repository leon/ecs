export abstract class System {
  init(): void {}
  abstract update(delta: number): void;
  remove(): void {}
}
