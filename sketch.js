function setup() {
 createCanvas(700, 480);

// R, G & B values.
  background (255 ,204 , 0);

// take a big brush
  strokeWeight(10);
// dip it in color purple
  stroke('green');
         
// place a dot on a screen
         point(700/2, 480/2);
}

function draw(){
  //declare variables
  let posY = mouseY;
  let posX = mouseX;
  point(posX, posY);
  // point(-posX, posY);
}