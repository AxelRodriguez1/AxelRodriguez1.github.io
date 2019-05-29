var aimerArray = []
var shotSound;
var targetArray = []
var numOfTargets = 5;
var numOfAimers =1
var sizeOfTarget = 45
var score = 0
var shotFired = 0;
var gameOver = false;

function preload() {
  shotSound = loadSound("laserSound.mp3")
}

function setup() {
  createCanvas(500, 500);



  //aimer array initiation loop
  for (var i = 0; i < numOfAimers; i++) {
    var newAimer = new Aimer();
    aimerArray.push(newAimer);
  }

  // target maker
  for (var i1 = 0; i1 < numOfTargets; i1++) {
    var newTarget = new target(random(width - 40), random(height - 40));
    targetArray.push(newTarget);
  }

}




// checks if mouse is pressed while over a target

function mousePressed() {
  if(gameOver === false) {
  shotFired = shotFired + 1
  }
  for (var i = 0; i < targetArray.length; i++) {
    var d1 = dist(targetArray[i].xLocation(), targetArray[i].yLocation(), mouseX, mouseY);

    if (d1 < (sizeOfTarget / 2)) {
      score = score + 1
      shotSound.play();
      targetArray[i].isShot = true

    }
  }
}


function draw() {
  //ends game and erases the target array
  if ((millis() / 1000) > 10) {

    background("black");
    fill("white");
    text("GAME OVER, YOU SCORED " + score, 100, 100);
    text("Shots Fired: " + shotFired , 100, 140);
    text("Accuracy: " + round((score/shotFired)*100) + "%", 100, 180);
    targetArray = []
    gameOver = true

    return
  }

  background(0, 119, 190);

  //timer
  fill("white")
  text(10-(round(millis() / 1000)), 0 + 50, 10, 40, 20)


  //score
  textSize(20)
  text(score, width - 40, 10, 40, 20)


  //continues updating target array stuff
  for (var i = 0; i < targetArray.length; i++) {

    if (targetArray[i].isShot === false) {
      targetArray[i].draw()
      targetArray[i].update()
    } else {
      targetArray.splice(i, 1)
    }
  }

  //spawns new target if one is killed
  if (targetArray.length < numOfTargets) {
    var newTarget = new target(random(width - 40), random(height - 40));
    targetArray.push(newTarget);
  }

  aimerArray[0].update()
  aimerArray[0].draw()

}
  
  //1. The goal for my project was to make a interactive target shooting game with sound. Your mouse is an aimer, and targets randomly move around the screen, you only have 10 seconds to eliminate as many targets as you can.

//2. I accomplished many things but to mention a few, I learned how to create multiple sprites using a character class so the sprites all act similar. I also was able to store the "characters" in an array. 