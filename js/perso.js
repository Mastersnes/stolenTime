function Perso() {
	this.move = new Point(0,0);
	this.position=new Point(350,200);
	this.speed=2;
	this.collisionMngr = new CollisionMngr();
	this.html = $(".perso");
}

Perso.prototype = {
	moveX : function(direction) {
		this.move.x=direction;
	},
	moveY : function(direction) {
		this.move.y=direction;
	},
	tick : function() {
		var startX = this.position.x;
		var startY = this.position.y;
	
		this.position.x+=this.move.x*this.speed;
		this.position.y+=this.move.y*this.speed;
		
		if (this.collisionMngr.check(this, ".perso")) {
			this.position.x = startX;
			this.position.y = startY;
		}
		
		return (startX != this.position.x) || (startY != this.position.y);
	},
	onkeydown : function(intKeyCode) {
		switch (intKeyCode) {
			case KEY_LEFT:
				this.moveX(-1);
				break;
			case KEY_RIGHT:
				this.moveX(1);
				break;
			case KEY_UP:
				this.moveY(-1);
				break;
			case KEY_DOWN:
				this.moveY(1);
				break;
			default:
		}
	},
	onkeyup : function(intKeyCode) {
		switch (intKeyCode) {
			case KEY_LEFT:
			case KEY_RIGHT:
				this.moveX(0);
				break;
			case KEY_UP:
			case KEY_DOWN:
				this.moveY(0);
				break;
			default:
		}
	}
};