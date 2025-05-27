import { Gameboard } from "./Gameboard";
import { Ship } from "./Ship";

test('testing Gameboard class', () => {
  const gameboard = new Gameboard()
  expect(gameboard.placeShip(0,0,'ship')).toBe('ship')
})
