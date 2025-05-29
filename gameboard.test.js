import { Gameboard } from "./Gameboard";
import { Ship } from "./Ship";

test('testing Gameboard class ship placement', () => {
  const gameboard = new Gameboard()
  const ship1 = new Ship(3)
  const ship2 = new Ship(5)
  expect(gameboard.placeShip(0,0, ship1,'horizontal')).toBe(ship1)
  expect(gameboard.board[0][1]).toBe(ship1)
  expect(gameboard.board[0][2]).toBe(ship1)
  expect(gameboard.placeShip(3, 5, ship2, 'vertical')).toBe(ship2)
  expect(gameboard.board[3][5]).toBe(ship2)
  expect(gameboard.board[4][5]).toBe(ship2)
  expect(gameboard.board[5][5]).toBe(ship2)
  expect(gameboard.board[6][5]).toBe(ship2)
  expect(gameboard.board[7][5]).toBe(ship2)
})
