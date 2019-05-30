//Instructions: 
//jump on top of dogs to elieminate them and yor score will increase
//if you get hit by a dog your health decreases
//the higher your score gets the more dogs respawn
// hold the up arrow to engage a shield to protect you, be careful it won't last forever!


var mainCharacter;
var numOfMonsters = 4;
var gravity = 9.8 / 30.0;
var backgroundImage;
var mainCharacterImage;
var monsterImage;
var groundOffset = 110;
var monsterArray = [];
var health = 100;
var score = 0;
var shieldBar = 100;
class Character {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.ySpeed = 0;
    this.xSpeed = 0;
    this.width = width;
    this.color = "blue"
    this.isMonster = false
    this.isDead = false
    this.targetX = random() * width
  }

  update() {
    if (this.y + this.width * 0.5 >= (height - groundOffset) && this.ySpeed > 0) {
      this.ySpeed = this.ySpeed * (-0.4)
      this.y = height - this.width * 0.5 - groundOffset
    }
    //this.ySpeed += gravity;
    //this.y += this.ySpeed;

    //if (this.isMonster === false) {
    // this.xSpeed *= 0.8
    // }
    // this.x += this.xSpeed;
    this.ySpeed += gravity;
    this.y += this.ySpeed;

    this.xSpeed *= 0.8
    this.x += this.xSpeed;


  }

  moveBadGuy() {
    var differenceX = this.targetX - this.x
    this.xSpeed += differenceX * 0.002

    if (random() >= 0.98) {
      this.targetX = random() * width
      this.ySpeed -= 4
    }


    this.isTouchingMainCharacter()
  }

  isTouchingMainCharacter() {
    if (mainCharacter.x + mainCharacter.width >= this.x && mainCharacter.x <= this.x + this.width &&
      mainCharacter.y + mainCharacter.width >= this.y && mainCharacter.y <= this.y + this.width) {
      stroke("black")
      noFill()
      rect(this.x, this.y, this.width, this.width)

      if (mainCharacter.y - this.y < -30) {
        this.isDead = true
        mainCharacter.ySpeed = -7
        score++
        if (shieldBar < 99) {
          shieldBar += 0.4
        }
      } else {

        health -= 0.4
        if (keyIsDown(UP_ARROW) && health < 100 && shieldBar > 0) {
          shieldBar -= 0.4




          stroke(255, 192, 203);
          strokeWeight(6);
          ellipse(mainCharacter.x + 30, mainCharacter.y + 30, 65, 65)
          health += 0.41
          strokeWeight(1);
        }
      }
    }

  }

  draw() {

    //stroke("red")
    // rect(this.x, this.y, this.width, this.width)

    if (this.isMonster) {
      image(monsterImage, this.x, this.y, this.width, this.width)
    } else {
      image(mainCharacterImage, this.x, this.y, this.width, this.width)
    }



  }

}

function setup() {
  createCanvas(800, 400);
  mainCharacter = new Character(100, 200, 60)
  backgroundImage = loadImage("./mountainbackground.jpg")
  mainCharacterImage = loadImage("./mtb.png")
  monsterImage = loadImage("./dog3.png")

  for (var i = 0; i < numOfMonsters; i++) {
    var newMonster = new Character(500 + i * 80, 100, 60);
    newMonster.isMonster = true
    monsterArray.push(newMonster);
  }


}

function draw() {
  if (health <= 0) {
    background(0)
    fill("white")
    text("GAME OVER. \nSCORE " + score, 200, 200, 200, 50)
    return
  }

  if (score >= 15) {
    numOfMonsters = 5
  }

  if (score >= 30) {
    numOfMonsters = 6
  }

  if (score >= 45) {
    numOfMonsters = 7
  }
  if (score >= 60) {
    numOfMonsters = 8
  }

  if (score >= 75) {
    numOfMonsters = 9
  }

  if (score >= 90) {
    numOfMonsters = 10
  }

  if (score >= 105) {
    numOfMonsters = 11
  }

  if (score >= 120) {
    numOfMonsters = 12
  }
  if (score >= 135) {
    numOfMonsters = 13
  }
  if (score >= 150) {
    numOfMonsters = 14
  }
  if (score >= 165) {
    numOfMonsters = 15
  }
  background(0, 200, 180);
  image(backgroundImage, 0, 0, width, height)

  if (keyIsDown(LEFT_ARROW)) {
    //move left
    mainCharacter.xSpeed -= 1.0
  }
  if (keyIsDown(RIGHT_ARROW)) {
    //move right
    mainCharacter.xSpeed += 1.0
  }

  mainCharacter.update();
  mainCharacter.draw()

  var anyDogAlive = false

  //health bar
  fill("red");
  stroke("black");
  rect(10, 13, health * 2, 20);
  fill("black")
  textSize(15)
  text("HEALTH",10,12)
    
  text(Math.round(health) + "%", 10, 26)

  //shield bar
  fill("green")
  stroke("black")
  rect(630, 360, shieldBar * 1.5, 20)
  fill("black")
  text(Math.round(shieldBar) + "%", 633, 376)
  text("SHIELD BAR",633,395)

  //score  
  fill("white")
  textSize(20)
  text(score, width - 40, 10, 40, 20)

  for (var i = 0; i < monsterArray.length; i++) {
    if (monsterArray[i].isDead) {
      //do nothing
    } else {
      anyDogAlive = true
      monsterArray[i].update()
      monsterArray[i].moveBadGuy()
      monsterArray[i].draw()

    }

  }
  if (anyDogAlive === false) {
    for (var i = 0; i < numOfMonsters; i++) {
      var newMonster = new Character(500 + i * 80, 100, 60);
      newMonster.isMonster = true
      monsterArray.push(newMonster);
    }
  }

}

function keyPressed() {
  if (key === " " && mainCharacter.y > 240) {

    mainCharacter.ySpeed -= 10.0

  }
}