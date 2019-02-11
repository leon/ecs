import { Entity } from '../src/Entity';
test('should create unique entity', () => {
  const e1 = new Entity();
  const e2 = new Entity();
  expect(e1.id).toEqual(0);
  expect(e2.id).toEqual(1);
});
