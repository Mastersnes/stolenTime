function Time(parent) {
	this.parent=parent;
	this.animateElements= new Array();
}

Time.prototype = {
	add : function(elmt) {
		this.animateElements.push(elmt);
	},
	tick : function(that) {
		var somethingChange = false;
		for	(var index = 0; index < that.animateElements.length; index++) {
			somethingChange = somethingChange || that.animateElements[index].tick();
		}
		if (somethingChange) {
			this.parent.refresh();
		}
	},
	start : function() {
		var that = this;
		setInterval(function() {
			that.tick(that);
		}, 50);
	}
};