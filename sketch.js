function Drop() {
	this.x = random(0, width);
	this.y = random(-height, height);
	this.l = random(2, 20);
	this.s = random(10, 30);
	this.a = random(3, 5);
	this.w = random(3, 8);

	this.fall = function() {
		stroke("#0000FF");
		strokeWeight(this.w)
		line(this.x, this.y, this.x, this.y + this.l);
		this.y = this.y + this.s;
		this.s += this.a;
		if(this.y > height + 100) {
			this.x = random(0, width);
			this.y = random(-height, -100);
			this.l = random(2, 20);
			this.s = random(2, 10);
			this.a = random(3, 5);
			this.w = random(3, 8);
		}
	}
}

var drops = [];

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	for(var i = 0; i < 100; i++) {
		drops[i] = new Drop();
	}
}

function draw() {
  frameRate(30);
  background(51);
  for (var key in drops) {
  	drops[key].fall();
  }
}

//xd