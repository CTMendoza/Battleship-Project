import {Ship} from "./Ship"

class Gameboard {
  constructor() {
    this.board = [
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null]
  ]
  }

  receiveAttack() {

  }

  placeShip(x,y,ship, direction) {
    if(ship.length > 1 && direction === 'horizontal') {
      let i = 0
      while (i < ship.length) {
        this.board[x][y + i] = ship
        i ++
      }
      return this.board[x][y]
    }
    else if (ship.length > 1 && direction === 'vertical') {
      let i = 0
      while (i < ship.length) {
        this.board[x + i][y] = ship
        i++
      }
      return this.board[x][y]
    }
    this.board[x][y] = ship
    return this.board[x][y]
  }

}

export {Gameboard}
