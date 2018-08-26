// JavaScript Document

function Loader() {
	feedtest();
	//fadeInMain();
}


function feedtest() {
	var randomNumber = Math.floor((Math.random() * 10 ) + 1);
	var feed = document.getElementById('feed');
	feed.innerHTML(randomNumber);
}

/*function fadeInMain() {
		//var main_section = $(".main_showcase .container");
		window.setTimeout(function() {
			$(".main_showcase .container").css("transition", "all 1000ms ease");
			$(".main_showcase .container").css("opacity", "1");
		}, 200);
}*/


window.addEventListener('load', Loader, false); 