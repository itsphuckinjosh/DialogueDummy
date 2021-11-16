let LB, LE, LQ, RB, RE, RQ, LES, LQS, RES, RQS, ES, QS;
var fr = 2
var myColor = 255  
var time = [15, 30, 45, 60, 90, 120]
let index = 0

function preload() {
  LB = loadImage('ConvLeft_0000_0.jpg');
  LE = loadImage('ConvLeft_0001_1.jpg');
  LQ = loadImage('ConvLeft_0002_2.jpg');
  RB = loadImage('ConvRight_0000_0.jpg');
  RE = loadImage('ConvRight_0001_1.jpg');
  RQ = loadImage('ConvRight_0002_2.jpg');
  BG = loadImage('MacGUI copy.jpg')
  
  soundFormats('wav');
  
  LES = loadSound('StartUp_L.wav');
  LQS = loadSound('Error_L.wav');
  RES = loadSound('StartUp_R.wav');
  RQS = loadSound('Error_R.wav');
  ES = loadSound('StartUp.wav');
  QS = loadSound('Error.wav');
  
  myFont = loadFont('AppleGaramond-Light.ttf');
}

function setup() {
  var w = 800
  var h = 450
  let cnv = createCanvas(w, h);
  cnv.position(windowWidth/2-w/2, windowHeight/2-h/2)
  timeRan = time[floor(random(0,time.length))]
  print(timeRan)
  getAudioContext().suspend();
}

function draw() {
  
  var fr = 4
  var wait = 3
  frameRate(fr);
  
  background (255)

  var imgW = 70
  var imgH = 70
  var xPos = width/2
  var yPos = height/2-imgH/2
  var LRan = floor(random(0, 4))
  var RRan = floor(random(0, 4))

  if (second() % 4 == 1 && LRan == 1) {
    image(LE, xPos-imgW-2, yPos, imgW, imgH);
    myColor = 0
  } else if (second() % 4 == 1 && LRan == 2) {
    image(LQ, xPos-imgW-2, yPos, imgW, imgH);
    myColor = 255
  } else {
    image(LB, xPos-imgW-2, yPos, imgW, imgH);
  }
  
  if (second() % 3 == 1 && RRan == 1) {
    image(RE, xPos+2, yPos, imgW, imgH);
    myColor = 0
  } else if (second() % 3 == 1 && RRan == 2) {
    image(RQ, xPos+2, yPos, imgW, imgH);
    myColor = 255
  } else {
    image(RB, xPos+2, yPos, imgW, imgH);
  }

}

function mousePressed() {
  if (index == 0){
    userStartAudio();
    index = 1
  } else if (index == 1) {
    getAudioContext().suspend();
    index = 0
  }
  
  
}