var cloud1;


function preload(){
  cloud1 = loadimage ("cloud1.png")
}

function setup() {
  createCanvas(700, 500);
  background(246, 240, 252);
  //imageMode(CENTER);

  //strokeweight(5);
}

function draw() {

  if (mouseIsPressed == true) {
    stroke(map(mouseX, 0, 600, 0, 71, true))
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

if (key === 'a'){
image(cloud1, mouseX, mouseY, 50,50);

}

} // end for function keyTyped
