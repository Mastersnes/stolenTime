function Test(scope) {
	this.$scope = scope;
	this.listElements = new Array();
	this.$scope.perso = new Perso();
	this.perso = this.$scope.perso;
}

Test.prototype = {
	start : function() {
		this.loadImage();
		
		var that = this;
		document.onkeydown = function(_event_) {
			var intKeyCode = checkEventObj(_event_).keyCode;
			that.perso.onkeydown(intKeyCode);
		};
		
		document.onkeyup = function(_event_) {
			var intKeyCode = checkEventObj(_event_).keyCode;
			that.perso.onkeyup(intKeyCode);
		};
		
		/**
		* Creation du Timer
		**/
		var time = new Time(this);
		time.add(this.perso);
		time.start();
	},
	refresh : function() {
		this.$scope.$apply();
	},
	loadImage : function() {
		$(".canvas").css("background-image","url(img/forest/fond.jpg)");
		$(".murHaut").css("background-image","url(img/forest/murH.png)");
		$(".murBas").css("background-image","url(img/forest/murB.png)");
		
		$(".perso").css("background-image","url(img/sprite/gaston.png)");
	}
}