
let noiseOffset = 0.0;
let strokeWidth = 5;



function setup() {
  createCanvas(windowWidth,windowHeight);
  background(246, 240, 252);

  //strokeweight(5);
}

function draw() {
background(246, 240, 252, 5);
strokeWeight(strokeWidth);

noiseOffset += 0.05;
strokeWidth = noise(noiseOffset) * 200;

    stroke(map(mouseX, 0, 600, 0, 71, true))
    //line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);

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


  }

return false;

} // end for function keyTyped
