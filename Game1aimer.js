class Aimer {
  constructor(x, y) {
    this.x = x;
    this.y = y;

  }
  update() {
    this.x = mouseX;
    this.y = mouseY;
  }

  draw() {
    noFill()
    strokeWeight(2.5)
    ellipse(this.x, this.y, 20, 20)
    strokeWeight(1.3)
    line(this.x, this.y - 15, this.x, this.y + 15)
    line(this.x - 15, this.y, this.x + 15, this.y)
  }
}
