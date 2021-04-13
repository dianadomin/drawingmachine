var moon1;


function preload(){
  moon1 = loadimage('moon1.png');
}

function setup() {
  createCanvas(700, 500);
  background(246, 240, 252);
  imageMode(CENTER);

  //strokeweight(5);
}

function draw() {

//  if (mouseIsPressed == true) {
//  stroke(map(mouseX, 0, 600, 0, 71, true))
    //line(mouseX, mouseY, pmouseX, pmouseY);
  }


function keyTyped() {
  //console.log(`key ${key} is being typed`)

  if (key === 's') {
    // Save Image
    saveCanvas('fileName', 'jpg')

  }

  if (key === 'c') {
    //clear the canvas
    clear();
    background(246, 240, 252);
  }
 if (key === 'a'){
   image (moon1, mouseX, mouseY, 300, 300);
 }

} // end for function keyTyped
