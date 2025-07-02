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
      cell.setAttribute('data-cord', JSON.stringify({ x: Math.floor(i / 10), y: i % 10 }))
      gridContainer.append(cell)
    }
    containerElement.append(gridContainer)
  }

  setupEventListeners(enemyContainerElement, callback) {
    //loop through each cell and attach an eventListener
    let cells = enemyContainerElement.querySelectorAll('.cell')
    cells.forEach(cell => {
      cell.addEventListener('click', callback)
    } )
    // Extract Coordinates Each cell has a data - cord attribute — you'll need to extract and parse that to get the x and y.


  }

  updateCell(x,y,result,e) {
    // Visually update a cell based on 'hit', 'missed', etc.
    if(result === 'hit') {
      e.target.classList.add('hit')
      console.log(e.target.classList)
    } else if(result === 'missed'){
      e.target.classList.add('miss')
      console.log(e.target.classList)
  }
}

  displayMessage(message) {
    // Show turn info, win/lose, etc.
  }

}

export {DomController}
