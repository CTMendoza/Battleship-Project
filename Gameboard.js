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
    this.missedHits = []

    this.ships = []
  }

  receiveAttack(x,y) {
    if(this.board[x][y] !== null) {
      this.board[x][y].hit()
      return 'hit'
    }
    this.missedHits.push([x,y])
    return 'missed'
  }

  allShipsSunk () {
    return this.ships.every(ship => ship.isSunk())
  }

  placeShip(x,y,ship, direction) {

    if((x < 0 || x > 9 ) || (y < 0 || y > 9)) {
      return 'Error: Either x or y cooridnate is outside the bounds of the board. Please re-enter coordinates'
    }

    if( direction === 'horizontal') {
      let i = 0
      while (i < ship.length) {
        if (y + i < 0 || y + i > 9) {
          return 'Error: The y cooridnate is outside the bounds of the board. Please re-enter coordinates'
        }
        if (this.board[x][y + i] !== null) {
          return `Error: A ship already occupies this space`
        }
        i ++
      }
      i = 0;
      while (i < ship.length) {
        this.board[x][y + i] = ship
        i++
      }
      this.ships.push(ship)
      return ship
    }

    if ( direction === 'vertical') {
      let i = 0;
      while (i < ship.length) {
        if (x + i < 0 || x + i > 9) {
          return 'Error: The x cooridnate is outside the bounds of the board. Please re-enter coordinates'
        }
        if (this.board[x + i][y ] !== null) {
          return `Error: A ship already occupies this space`
        }
        i++
      }
      i = 0;
      while (i < ship.length) {
        this.board[x + i][y] = ship
        i++
      }
      this.ships.push(ship)
      return ship
    }

    return 'Error: Direction must be either "horizontal" or "vertical"';
  }


}

export {Gameboard}
