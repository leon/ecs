import { System } from './System';

export class World {
  private systems: System[] = [];

  update() {
    const dt = performance.now();
    const sys = this.systems;
    for (let i = 0, len = sys.length; i < len; i++) {
      sys[i].update(dt);
    }
  }
}
