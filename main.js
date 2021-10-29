x = 0;
y = 0;
drawcircle = '';
drawrectangle = '';
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById('status').innerHTML = "System is Listening *Please Speak*";
    recognition.start();
}
recognition.onresult = function(event) {
    console.log(event);
    content = event.results[0][0].transcript;
    document.getElementById('status').innerHTML = "Speech is Recognized as - "+content;
    if (content == 'circle') {
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById('status').innerHTML = "Started Drawing Circle";
        drawcircle = 'set';  
    }
    if (content == 'rectangle') {
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById('status').innerHTML = "Started Drawing Rectangle";
        drawrectangle = 'set';  
    }
}
function setup() {
    Canvas = createCanvas(900,600);
}
function draw() {
    if (drawcircle == 'set') {
      radius  = Math.floor(Math.random()*100); 
      circle(x,y,radius);
      document.getElementById('status').innerHTML = "Circle is Drawn";
      drawcircle = '';
    }
    if (drawrectangle == 'set') {
        rect(x,y,rect_x,rect_y);
        document.getElementById('status').innerHTML = "Rectangle is Drawn";
        drawrectangle = '';
      }
  
}
rect_x = Math.floor(Math.random()*500); 
rect_y = Math.floor(Math.random()*500);
