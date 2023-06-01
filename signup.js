$(document).ready(function() {
	$("#username").focus();

	var music = document.getElementById("music");

	$("#username, #password").on("keyup", function() {
		music.volume = 0.2;
		music.play();
	});

	$("form").on("submit", function(e) {
		e.preventDefault();
		music.pause();
		alert("Login Successful!");
	});
});
