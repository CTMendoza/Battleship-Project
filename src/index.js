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
dom.renderBoard(playerGameboard, playerContainerElement)
dom.renderBoard(computerGameboard, computerContainerelement)
const computerGrid = computerContainerelement.querySelector('.grid-container');
dom.setupEventListeners(computerGrid, (e) => console.log(`${e.target} clicked`))
