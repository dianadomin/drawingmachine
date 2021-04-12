function setup() {
  createCanvas(windowWidth,windowHeight);
  background(246, 240, 252);

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

  if (key === 'c') {
    //clear the canvas
    clear();
    background(246, 240, 252);


  }


} // end for function keyTyped
