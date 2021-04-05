function setup() {
  createCanvas(400, 400);
  background(187, 164, 235);

  //strokeweight(5);
}

function draw() {

  if (mouseIsPressed == true) {
    stroke(map(mouseX, 0, 600, 0, 255, true))
    line(mouseX, mouseY, pmouseX, pmouseY);

  } //ending for function draw



} //ending for function draw()

function keyTyped() {
  console.log(`key ${key} is being typed`)

  if (key === 's') {
    // Save Image
    saveCanvas('fileName', 'jpg')
  }


} // end for function keyTyped
