class target {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.xSpeed = random(-2, 2)
    this.ySpeed = random(-2, 2)
    this.r = sizeOfTarget
    this.isShot = false
  }

  draw() {

    fill("yellow")
    strokeWeight(2);
    ellipse(this.x, this.y, sizeOfTarget, sizeOfTarget);
    fill("red")
    strokeWeight(1)
    ellipse(this.x, this.y, 19, 19);
    fill("black")
    ellipse(this.x,this.y,2,2)

  }

  update() {
    //speed update 
    this.x += this.xSpeed
    this.y += this.ySpeed

    //bouncing logic
    if (this.x > width - (sizeOfTarget / 2)) {
      this.xSpeed = this.xSpeed * -1
    }
    if (this.x < (sizeOfTarget / 2)) {
      this.xSpeed = this.xSpeed * -1
    }
    if (this.y > height - (sizeOfTarget / 2)) {
      this.ySpeed = this.ySpeed * -1
    }
    if (this.y < (sizeOfTarget / 2)) {
      this.ySpeed = this.ySpeed * -1
    }

  }

  xLocation() {
    return (this.x)
  }

  yLocation() {
    return (this.y)
  }
}
