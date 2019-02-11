export type ComponentMap = { [name: string]: any };

export class Entity {
  static UUID = 0;

  id: number = Entity.UUID++;

  components: ComponentMap = {};
}
