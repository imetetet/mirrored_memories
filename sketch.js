let cam;
let img;

function setup() {
  createCanvas(1000, 600);
  img = loadImage('assets/school.jpeg')
  cam = createCapture(VIDEO);
  // Hide the DOM element for the stream <video>
  cam.hide();
}

function draw() {
  background(220);
  // Draw the current frame from the webcam stream to the canvas at 0,0
   image(img, 0, 0);
  
  // Load the current frame's pixels array into memory
  cam.loadPixels();
  
  // For every row of pixels
  for(let y = 100; y < cam.height; y+=10) {
    // Visit every column of pixels
    for(let x = 150; x < cam.width; x+=10) {
      // Get the color array [r,g,b,a] at x,y
      let colorOfCamAtXY = cam.get(x,y);
    
      
      // Extract the brightness level of the color
      let b = brightness(colorOfCamAtXY);
      // Test for a brightness threshold of 50
      if(b > 50) fill('white');
      else fill('black');
      
      // Draw a 10x10 rectangle at x,y
     // rect(x*1.2, y, 10, 10);
      circle(x*1.2,y,10);
    }
  }
}