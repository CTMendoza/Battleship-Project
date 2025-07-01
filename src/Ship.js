class Ship {
  constructor(length) {
    this.length = length
    this.hits = 0
  }

  hit() {
    this.hits ++
    return true
  }

  isSunk () {
    return this.length <= this.hits
  }
}

export{Ship}
