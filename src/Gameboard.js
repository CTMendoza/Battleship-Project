import {Ship} from "./Ship"

class Gameboard {
  constructor() {
    // this.board will track if board cells are occupied by ships
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
    //this.attacks will track if the cells on the board have been attacked whether if it hit a ship or not
    this.attacks = [
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false]
    ]
    this.missedHits = []

    this.ships = []
  }

  receiveAttack(x,y) {
    if(this.attacks[x][y] === true){
      return 'was already issued please choose another cell'
    }
    else if(this.board[x][y] !== null) {
      this.board[x][y].hit()
      this.attacks[x][y] = true
      console.log(`Hit at (${x}, ${y})`);
      return 'a hit'
    }
    this.missedHits.push([x,y])
    this.attacks[x][y] = true
    console.log(`Missed at (${x}, ${y})`);
    return 'a miss'
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
