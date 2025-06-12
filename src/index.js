import { Gameboard } from "./Gameboard";
import { Ship } from "./Ship"
import { RealPlayer, ComputerPlayer } from "./Player";
import './styles.css'

const playerContainerElement = document.getElementById('player-board')
const computerContainerelement = document.getElementById('computer-board')
const player = new RealPlayer
const playerGameboard = player.gameboard
const computer = new ComputerPlayer
const computerGameboard = computer.gameboard
