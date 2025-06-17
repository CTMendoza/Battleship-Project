class DomController {

  renderBoard(board, containerElement) {
    // Clear the container
    containerElement.innerHTML = '';
    // and re-render based on Gameboard data
    let gridContainer = document.createElement('div');
    gridContainer.classList.add('grid-container');
    for(let i = 0; i < 100; i++) {
      let cell = document.createElement('div')
      cell.classList.add('cell')
      cell.setAttribute('data-cord', JSON.stringify({ x: i % 10, y: Math.floor(i / 10) }))
      gridContainer.append(cell)
    }
    containerElement.append(gridContainer)
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
