import { Gameboard } from "./Gameboard";
class RealPlayer {
  constructor() {
    this.gameboard = new Gameboard
  }
}

class ComputerPlayer {
  constructor() {
    this.gameboard = new Gameboard
  }

  //method returns a random coordinate that will be used when the computer attacks player board
  getRandomCoordinate() {
    let x, y
    do {
      x = Math.floor(Math.randon() *10)
      y = Math.floor(Math.random()* 10)
    } while (this.gameboard.attacks[x][y])
   return {x,y}
  }
}

export {RealPlayer, ComputerPlayer}
