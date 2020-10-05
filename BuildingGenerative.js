var CONST_WIDTH_MIN = 20;
var CONST_WIDTH_MAX = 50;
var CONST_HEIGHT_MIN = 150;
var CONST_HEIGHT_MAX = 500;

function setup() {
	createCanvas(500, 500);
	background(100, 100, 200);
	noLoop();
}

function drawBuilding(x, y, w, h) {
  fill(random(100, 255));
  rect(x, y, w, h);
  fill(255, 255, 0);
  for (var i = y + h; i < y; i += 15) {
    if (w/2 > 15) {
      rect(x + 5, i + 5, 10, 10);
      rect(x + w - 15, i + 5, 10, 10);
    }
    else {
      rect(x + w/2 - 5, i + 5, 10, 10);
    }
  }
}

function draw() {
  //drawBuilding(0, 600, 36, -200);
  var total_width = width;
  var random_width = random(CONST_WIDTH_MIN, CONST_WIDTH_MAX);
  var random_height = -random(CONST_HEIGHT_MIN, CONST_HEIGHT_MAX);
  var next_pos = 0;

  while (total_width > 0) {
    drawBuilding(next_pos, 500, random_width, random_height);
    total_width -= random_width;
    next_pos += random_width;
    random_width = random(CONST_WIDTH_MIN, CONST_WIDTH_MAX);
    random_height = -random(CONST_HEIGHT_MIN, CONST_HEIGHT_MAX);
  }
}