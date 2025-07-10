import { Gameboard } from "./Gameboard";
import { Ship } from "./Ship"
import { RealPlayer, ComputerPlayer } from "./Player";
import { DomController } from "./domController";
import './styles.css'

const dom = new DomController()
const playerContainerElement = document.getElementById('player-board')
const computerContainerelement = document.getElementById('computer-board')
const body = document.body
const player = new RealPlayer
const playerGameboard = player.gameboard
const playerGrid = playerContainerElement.querySelector('.grid-container')
const computer = new ComputerPlayer
const computerGameboard = computer.gameboard
let currentTurn = 'player'


computerGameboard.placeShip(0,0, computerGameboard.ships[0], 'vertical')
playerGameboard.placeShip(0, 0, playerGameboard.ships[0], 'vertical')

dom.renderBoard(playerGameboard, playerContainerElement)
dom.renderBoard(computerGameboard, computerContainerelement)
const computerGrid = computerContainerelement.querySelector('.grid-container');

dom.setupEventListeners(computerGrid, (e) => {
  if(currentTurn !== 'player') return

  const coord = JSON.parse(e.target.getAttribute('data-cord'))
  const result = computerGameboard.receiveAttack(coord.x, coord.y);

  if(result === 'already attacked' || result === undefined) return

  dom.updateCell(result, e.target)
  dom.displayMessage(`Attack at (${coord.x}, ${coord.y}) was ${result}`)
  currentTurn = 'computer'

  setTimeout(() => {
    let coord
    let result
    let x, y;
    do {
       coord = computer.getRandomCoordinate();
       x = coord.x
       y = coord.y
       result = playerGameboard.receiveAttack(x, y)
    }
    while (result === 'already attacked')

    // Find the corresponding cell DOM element on player's board
    const cell = playerContainerElement.querySelector(`[data-cord='${JSON.stringify({ x, y })}']`);
    dom.updateCell(result, cell);
    dom.displayMessage(`Computer attacked (${x}, ${y}) and it was ${result}`);
    currentTurn = 'player'; // switch back to player's turn
  }, 500)
  }
)
