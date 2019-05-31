var angle= 0.0
function setup() {
  createCanvas(700, 630, WEBGL);
}

function draw() {
  orbitControl(3)
  background(150, 200, 250);
  
  smooth()
  noFill()
  //box in center
  rotateY(angle)
  box(40)
  rotateY(-angle)
  
  //large sphere on right
  translate(200,0,0)
  sphere(130)
  
  //upper left red cylinder
  fill("red")
  translate(-400,-240,0)
  cylinder(60)

  
angle += 0.02
}