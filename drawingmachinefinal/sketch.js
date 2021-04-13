var cloud1;
var cloud2;
var cloud3;
var cloud4;
var cloud5;

var gradbg1;
var gradbg2;
var gradbg3;
var gradbg4;
var gradbg5;
var gradbg6;
var gradbg7;

var moon1;
var moon2;
var moon3;
var moon4;

var sun1;
var sun2;
var sun3;
var sun4;

function preload() {
  cloud1 = loadImage('drawingmachineimages/cloud1.png');
  cloud2 = loadImage('drawingmachineimages/cloud2.png');
  cloud3 = loadImage('drawingmachineimages/cloud3.png');
  cloud4 = loadImage('drawingmachineimages/cloud4.png');
  cloud5 = loadImage('drawingmachineimages/cloud5.png');
  
  gradbg1 = loadImage('drawingmachineimages/gradbg1.jpg');
  gradbg2= loadImage('drawingmachineimages/gradbg2.jpg');
  gradbg3 = loadImage('drawingmachineimages/gradbg3.jpg');
  gradbg4 = loadImage('drawingmachineimages/gradbg4.jpg');
  gradbg5 = loadImage('drawingmachineimages/gradbg5.jpg');
  gradbg6 = loadImage('drawingmachineimages/gradbg6.jpg');
  gradbg7 = loadImage('drawingmachineimages/gradbg7.jpg');
  
   moon1 = loadImage('drawingmachineimages/moon1.png');
   moon2 = loadImage('drawingmachineimages/moon2.png');
   moon3 = loadImage('drawingmachineimages/moon3.png');
   moon4 = loadImage('drawingmachineimages/moon4.png');
  
   sun1 = loadImage('drawingmachineimages/sun1.png');
   sun2 = loadImage('drawingmachineimages/sun2.png');
   sun3 = loadImage('drawingmachineimages/sun3.png');
   sun4 = loadImage('drawingmachineimages/sun4.png');


}

function setup() {
  createCanvas(700,500);
  background(246, 240, 252);
  imageMode(CENTER);
}


function draw() {
 if (mouseIsPressed== true){
 strokeWeight(3);
 line(mouseX, mouseY, pmouseX, pmouseY); }
}


function keyTyped() {
  
  if (key === 's'){
    saveCanvas('fileName', 'jpg');
  }
  
  if (key === 'c'){
    clear();
    background(246, 240, 252);
  }
  
  if (key === '1'){
    stroke(255, 255, 255);
  }
  
  if (key === '2'){
    stroke(0, 0, 0);
  }
  
    if (key === '3'){
    stroke(92, 60, 42);
  }
  
    if (key === '4'){
    stroke(112, 92, 161);
  }
  
    if (key === '5'){
    stroke(15, 43, 219);
  }
  
    if (key === '6'){
    stroke(53, 115, 47);
  }
  
    if (key === '7'){
    stroke(222, 218, 120);
  }
  
    if (key === '8'){
    stroke(230, 81, 23);
  }
  
    if (key === '9'){
    stroke(184, 26, 26);
  }
  
  if (key === 'q'){
    image(cloud1, mouseX, mouseY, 400, 400);
  }
  
    if (key === 'w'){
    image(cloud2, mouseX, mouseY, 400, 400);
  }
  
    if (key === 'e'){
    image(cloud3, mouseX, mouseY, 400, 400);
  }
  
    if (key === 'r'){
    image(cloud4, mouseX, mouseY, 400, 400);
  }
  
    if (key === 't'){
    image(cloud5, mouseX, mouseY, 400, 400);
  }
  
  if (key === 'z'){
    image (gradbg1, 350, 250,700,500);
  }
  
    if (key === 'x'){
    image (gradbg2, 350, 250,700,500);
  }
  
    if (key === 'v'){
    image (gradbg3, 350, 250,700,500);
  }
  
    if (key === 'b'){
    image (gradbg4, 350, 250,700,500);
  }
  
    if (key === 'n'){
    image (gradbg5, 350, 250,700,500);
  }
  
    if (key === 'm'){
    image (gradbg6, 350, 250,700,500);
  }
  
    if (key === 'y'){
    image (gradbg7, 350, 250,700,500);
  }
  
     if (key === 'a'){
  image(moon1, mouseX, mouseY, 300, 300); }
  
       if (key === 'f'){
  image(moon2, mouseX, mouseY, 300, 300); }
  
       if (key === 'g'){
  image(moon3, mouseX, mouseY, 300, 300); }
  
  if (key === 'd'){
  image(moon4, mouseX, mouseY, 300, 300); }
  
 if (key === 'h'){
   image(sun1, mouseX, mouseY, 500,400);
 }
  
  if (key === 'j'){
   image(sun2, mouseX, mouseY, 500,400);
 } 
  
   if (key === 'k'){
   image(sun3, mouseX, mouseY, 500,400);
 }
  
   if (key === 'l'){
   image(sun4, mouseX, mouseY, 500,400);
 }
  
  
}

