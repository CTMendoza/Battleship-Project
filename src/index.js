import { Gameboard } from "./Gameboard";
import { Ship } from "./Ship"
import { RealPlayer, ComputerPlayer } from "./Player";
import { DomController } from "./domController";
import './styles.css'

const dom = new DomController()
const playerContainerElement = document.getElementById('player-board')
const computerContainerelement = document.getElementById('computer-board')
const player = new RealPlayer
const playerGameboard = player.gameboard
const playerGrid = playerContainerElement.querySelector('.grid-container')
const computer = new ComputerPlayer
const computerGameboard = computer.gameboard
const compShip1 = new Ship(5)
const compShip2 = new Ship(4)
const compShip3 = new Ship(3)
const compShip4 = new Ship(3)
const compShip5 = new Ship(2)

computerGameboard.placeShip(0,0, compShip1, 'vertical')

dom.renderBoard(playerGameboard, playerContainerElement)
dom.renderBoard(computerGameboard, computerContainerelement)
const computerGrid = computerContainerelement.querySelector('.grid-container');
dom.setupEventListeners(computerGrid, (e) => {
  const coord = JSON.parse(e.target.getAttribute('data-cord'))
  const result = computerGameboard.receiveAttack(coord.x, coord.y);
  dom.updateCell(result, e)
  dom.displayMessage(`Attack at (${coord.x}, ${coord.y}) was ${result}`)
})
