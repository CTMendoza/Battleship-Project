import { Ship } from "./Ship";

test('testing Ship class', ()=> {
  const ship = new Ship(3);
  expect(ship.hit()).toBe(1);
  expect(ship.isSunk()).toBe(false);
  expect(ship.hit()).toBe(2);
  expect(ship.hit()).toBe(3);
  expect(ship.isSunk()).toBe(true);
})
