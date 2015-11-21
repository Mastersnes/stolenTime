'use strict';

function loadScript(url, callback)
{
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
	if (callback) {
		script.onreadystatechange = callback;
		script.onload = callback;
	}
	head.appendChild(script);
}

loadScript("js/keyboard.js", keyboardOk);
function keyboardOk() {
	console.log("keyboard OK");
	loadScript("js/util.js", utilOk);
}

function utilOk() {
	console.log("util OK");
	loadScript("js/collision.js", collisionOk);
}

function collisionOk() {
	console.log("collision OK");
	loadScript("js/time.js", timeOk);
}

function timeOk() {
	console.log("time OK");
	loadScript("js/perso.js", persoOk);
}

function persoOk() {
	console.log("keyboard OK");
	loadScript("js/test.js", testOk);
}

function testOk() {
	console.log("test OK");
	loadScript("https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.js", jqueryOk);
}

function jqueryOk() {
	console.log("jquery OK");
	loadScript("https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.js", angularOk);
}

function angularOk() {
	console.log("angular OK");
	var testApp = angular.module('testApp', ['testMod']);
	var testMod = angular.module('testMod',[]);
	testMod.controller('testCtrl', ['$scope', function($scope) {
		var test = new Test($scope);
		test.start();
	}]);
}