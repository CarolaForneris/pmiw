let imagen;
let cant = 3;
let tam;
let color1, color2;

function preload (){
  imagen = loadImage ("imagen.jpeg")
}


function setup() {
  createCanvas  (800,400);
  imagen.resize (400,400);
  tam = 400 / cant;
  color1 = "#2528B7";
  color2 = "#060D1D";
  noStroke ();
  
 }


function draw() {
background (255);
image (imagen, 0, 0,400, 400);
dibujo (400);

}

function mousePressed (){
color1 = color(random (255), random (255), random (255));
color2 = color (random (255), random (255), random (255));

}

function keyPressed () {

  if (key == "r") {
    color1 = "#2528B7";
    color2 = "#060D1D";
  } 
  }
  
