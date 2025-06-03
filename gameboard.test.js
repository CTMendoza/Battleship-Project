import { Gameboard } from "./Gameboard";
import { Ship } from "./Ship";

test('testing Gameboard class ship placement', () => {
  const gameboard = new Gameboard()
  const ship1 = new Ship(3)
  const ship2 = new Ship(5)
  const ship3 =new Ship(1)
  const ship4 = new Ship(1)
  const ship5 = new Ship(2)
  const ship6 = new Ship(2)

  expect(gameboard.placeShip(0, 8, ship1, 'horizontal')).toBe('Error: The y cooridnate is outside the bounds of the board. Please re-enter coordinates')
  expect(gameboard.board[0][8]).toBe(null)
  expect(gameboard.board[0][9]).toBe(null)

  expect(gameboard.placeShip(3, 5, ship2, 'vertical')).toBe(ship2)
  expect(gameboard.board[3][5]).toBe(ship2)
  expect(gameboard.board[4][5]).toBe(ship2)
  expect(gameboard.board[5][5]).toBe(ship2)
  expect(gameboard.board[6][5]).toBe(ship2)
  expect(gameboard.board[7][5]).toBe(ship2)

  expect(gameboard.placeShip(9, 10, ship3)).toBe('Error: Either x or y cooridnate is outside the bounds of the board. Please re-enter coordinates')
  expect(gameboard.placeShip(10, 9, ship3)).toBe('Error: Either x or y cooridnate is outside the bounds of the board. Please re-enter coordinates')

  expect(gameboard.placeShip(5, 5, ship4, 'vertical')).toBe(`Error: A ship already occupies this space`)

  gameboard.placeShip(0, 8, new Ship(1), 'horizontal')
  expect(gameboard.placeShip(0, 7, ship5, 'horizontal')).toBe(`Error: A ship already occupies this space`)

  expect(gameboard.placeShip(2, 5, ship6, 'vertical')).toBe(`Error: A ship already occupies this space`)
})

test('testing Gameboard receiveAttack method', () => {
  const gameboard = new Gameboard()
  const ship1 = new Ship(3)
  gameboard.placeShip(0, 0, ship1, 'horizontal')
  expect(gameboard.receiveAttack(0,0)).toStrictEqual('hit')
  expect(gameboard.receiveAttack(0, 1)).toStrictEqual('hit')
  expect(gameboard.receiveAttack(0, 2)).toStrictEqual('hit')
  expect(gameboard.receiveAttack(0, 3)).toStrictEqual('missed')
  expect(gameboard.missedHits).toStrictEqual([[0,3]])
  expect(ship1.hits).toBe(3)
  expect(ship1.isSunk()).toBe(true)
})

test('testing Gameboard allShipsSunk method', () => {
  const gameboard = new Gameboard()
  const ship1 = new Ship(3)
  const ship2 = new Ship(1)
  gameboard.placeShip(0, 0, ship1, 'horizontal')
  expect(gameboard.receiveAttack(0, 0)).toStrictEqual('hit')
  expect(gameboard.receiveAttack(0, 1)).toStrictEqual('hit')
  expect(gameboard.receiveAttack(0, 2)).toStrictEqual('hit')
  expect(gameboard.receiveAttack(0, 3)).toStrictEqual('missed')
  expect(gameboard.missedHits).toStrictEqual([[0, 3]])
  expect(ship1.hits).toBe(3)
  expect(ship1.isSunk()).toBe(true)
  gameboard.placeShip(1, 0, ship2, 'horizontal')
  expect(gameboard.receiveAttack(1, 0)).toStrictEqual('hit')
  expect(gameboard.receiveAttack(1, 1)).toStrictEqual('missed')
  expect(gameboard.missedHits).toStrictEqual([[0, 3],[1,1]])
  expect(ship2.hits).toBe(1)
  expect(ship2.isSunk()).toBe(true)
  expect(gameboard.allShipsSunk()).toBe(true)
})
