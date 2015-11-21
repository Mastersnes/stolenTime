function CollisionMngr() {
}

CollisionMngr.prototype = {
	check : function(element, name) {
		var x = element.position.x;
		var y = element.position.y;
		var w = parseInt(element.html.css("width"));
		var h = parseInt(element.html.css("height"));
		
		if (x <= 110 || x+w >= 610) {
			return true;
		}else if (y <= 80 || y+h >= 380) {
			return true;
		}
	}
}