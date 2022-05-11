// Declare a variable for the stream from the webcam 
let cam;
let gridSize=10;

function setup() {
  createCanvas(600, 400);
  
  // Grab the media stream from the webcam and store it as a p5.MediaElement object
  cam = createCapture(VIDEO);
  // Hide the DOM element for the stream <video>
  cam.hide();
}

function draw() {
  background('#000000');
  // Draw the current frame from the webcam stream to the canvas at 0,0
  //image(cam, 0, 0);
  
  // Load the current frame's pixels array into memory
  cam.loadPixels();
  
  // For every row of pixels
  for(let y = 0; y < cam.height; y+=gridSize) {
    // Visit every column of pixels
    for(let x = 0; x < cam.width; x+=gridSize) {
      // Get the color array [r,g,b,a] at x,y
      let colorOfCamAtXY = cam.get(x,y);
   
      
      // Use that color as fill
      //fill(colorOfCamAtXY);
      
      // Extract the brightness level of the color
      let b = brightness(colorOfCamAtXY);
      // Test for a brightness threshold of 50
      if(b > 50) fill('#FFFFFF');
      else fill('#000000'); 
      
      
      // Draw a 10x10 rectangle at x,y
      //rect(x, y, 10, 10);
      circle(x+gridSize/2,y+gridSize/2, gridSize);
    }
  }
}