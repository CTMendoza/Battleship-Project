class DomController {

  renderBoard(board, containerElement) {
    // Clear the container
    containerElement.innerHtml = '';
    // and re-render based on Gameboard data
  }

  setupEventListeners(playerBoardElement, callback) {
    // Attach click events to enemy board cells
  }

  updateCell(x,y,result) {
    // Visually update a cell based on 'hit', 'missed', etc.
  }

  displayMessage(message) {
    // Show turn info, win/lose, etc.
  }

}

export {DomController}
