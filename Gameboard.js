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
    if((x < 0 || x > 9 ) || (y < 0 || y > 9)) {
      return 'Error: Either x or y cooridnate is outside the bounds of the board. Please re-enter coordinates'
    }
    // if(this.board[x][y] !== null) {
    //   return `Error: ${this.board[x][y]} already occupys this space`
    // }

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
      return ship
    }
    return 'Error: Direction must be either "horizontal" or "vertical"';
  }

}

export {Gameboard}
