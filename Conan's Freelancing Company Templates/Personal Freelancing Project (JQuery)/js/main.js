// JavaScript Document

/*

function checkOffset() {
	"use strict";
	$(document).ready(function() {
		$('#Preview_V').click(function() {
			var mainshow = $(".main_showcase").offset().top;
			var clouds = $('#clouds').offset().top;
			$('#clouds_feedback').html('Main Section top = ' + mainshow + '<br>' + 'Clouds top = ' + clouds + '.');
		});
	});
}

*/
var boolean = true;

function main () {
	"use strict";
	doStart();
	checkScroll();
	//checkOffset();
	//checkUserScrollTop();
	//animateScroll();
	side_nav();
	dialog_box_Open();
	closeDialogbox();
	Preview_p_innerHTML();
	Loader();
}

function doStart() {
	"use strict";
	 var span_button = document.getElementById('btn-span');
	span_button.onclick=open;
	menuOpen();
}

function open() {
	"use strict";
	var side_menu = document.getElementById('side_nav');
	var span_button = document.getElementById('btn-span');
	var menu = document.getElementById('menu');
	var wrapper = document.getElementById('wrapper');
	var slogo = document.getElementById('slogo');
	var side_nav_ul = document.getElementById('side_nav_ul');
	side_menu.style.width="200px";
	span_button.style.marginLeft="205px";
	menu.style.marginLeft="260px";
	wrapper.style.marginLeft="200px";
	slogo.style.margin="50px 35px";
	side_nav_ul.style.marginLeft="0px";
	boolean = false;
	span_button.onclick=close;
	
}

function close() {
	"use strict";
	var side_menu = document.getElementById('side_nav');
	var span_button = document.getElementById('btn-span');
	var menu = document.getElementById('menu');
	var wrapper = document.getElementById('wrapper');
	var slogo = document.getElementById('slogo');
	var side_nav_ul = document.getElementById('side_nav_ul');
	side_menu.style.width="0px";
	span_button.style.marginLeft="5px";
	menu.style.marginLeft="60px";
	wrapper.style.marginLeft="0px";
	slogo.style.margin="50px -200px";
	side_nav_ul.style.marginLeft="-200px";
	boolean = false;
	span_button.onclick=open;
	
}


function menuOpen() {
	"use strict";
		$(document).ready(function() {
		$('#menu').click(function() {
			$('#side_nav').css("width", "200px");
			$('#btn-span').css("marginLeft", "205px");
			$(this).css("marginLeft", "260px");
			$('#wrapper').css("marginLeft", "200px");
			$('#slogo').css("margin", "50px 35px");
			$('#side_nav_ul').css("marginLeft", "0px");
			menuClose();
			boolean = false;
		});
			
	}); 
}

function menuClose() {
	"use strict";
		$(document).ready(function() {
		$('#menu').click(function() {
			$('#side_nav').css("width", "0px");
			$('#btn-span').css("marginLeft", "5px");
			$(this).css("marginLeft", "60px");
			$('#wrapper').css("marginLeft", "0px");
			$('#slogo').css("margin", "50px -200px");
			$('#side_nav_ul').css("marginLeft", "-200px");
			menuOpen();
			boolean = false;
		});
	}); 
}

function checkScroll() {
	"use strict";
	var doc = $(document);
	var feedback = $('#clouds_feedback');
	doc.ready(function() {
		doc.scroll(function() {
			feedback.html("");
		});
	});
}

/*/function checkUserScrollTop(){
	"use strict";
	var doc = $(document);
	var clouds = $('#clouds').offset().top;
	doc.ready(function() {
		doc.on('scroll', function () {
			if (doc.scrollTop() > clouds) {
				$('#testCode').html("You are now in the clouds section");
			}
		});
		
	});
}
*/
/*function animateScroll() {
	"use strict";
	var doc = $(document);
	var cloudSecOffset= $('#clouds').offset().top/2;
	var animateThis = $('#testCode');
	doc.ready(function() {
		doc.on('scroll', function() {
			if (doc.scrollTop() > cloudSecOffset) {
				animateThis.stop().animate({'margin-top' : "100px"}, 500);
				animateThis.animate(
					{'margin-left': "200px"}, 600);
				
				
			}
		});
	});
}

*/

function side_nav() {
	"use strict";
var doc = $(document);
	doc.ready(function() {
		doc.on('scroll', function() {
				if (doc.scrollTop() === 0 && boolean === false) {
					boolean = true;
				/*var check = confirm("Would you like your side nav to come out automaticcally again?");
				if (check === true) {
					boolean = true;
				} else {
					boolean = false;
				}*/
				}
			var buttonOffset = $('.main_nav').offset().top;
			if (doc.scrollTop() > buttonOffset && boolean === true) {
			$('#side_nav').css("width", "200px");
			$('#btn-span').css("marginLeft", "205px");
			$('#menu').css("marginLeft", "260px");
			$('#wrapper').css("marginLeft", "200px");
			$('#slogo').css("margin", "50px 35px");
			$('#side_nav_ul').css("marginLeft", "0px");
			
			} else if (doc.scrollTop() < buttonOffset && boolean === true) {
				$('#side_nav').css("width", "0px");
				$('#btn-span').css("marginLeft", "5px");
				$('#menu').css("marginLeft", "60px");
				$('#wrapper').css("marginLeft", "0px");
				$('#slogo').css("margin", "50px -200px");
				$('#side_nav_ul').css("marginLeft", "-200px");
			
			}

		});
	});
}


function dialog_box_Open() {
	"use strict";
	boolean = false;
	var doc = $(document);
	var button = $('#button');
	var dialog_Bg = $('.dialog_box');
	var box = $('.box');
	var box_head = $('#preview_Head');
	var Siteb = $('#Siteb');
	var Youtubeb = $('#Youtubeb');
	var plogo = $('#plogo');
	doc.ready(function() {
		button.click(function() {
			button.attr('disabled', 'disabled');
			dialog_Bg.css("display", "block");
			$('#side_nav').css("width", "0px");
			$('#btn-span').css("marginLeft", "5px");
			$('#menu').css("marginLeft", "60px");
			$('#wrapper').css("marginLeft", "0px");
			$('#slogo').css("margin", "50px -200px");
			$('#side_nav_ul').css("marginLeft", "-200px");
		/*	dialog_Bg.animate({
				"margin-top" : "550px"
			}, 500);*/
			dialog_Bg.animate({
				left : "0px"
				
			}, 250);
			dialog_Bg.animate({
				opacity : "0"
				
			}, 10);
			dialog_Bg.animate({
				"margin-top": "0px"
			}, 250);
				dialog_Bg.animate({
				opacity : "1"
				
			}, 100);
			/*dialog_Bg.stop().animate({
				width : "20%"
			}, 2000);*/
			dialog_Bg.animate({
				height : "100%"
			}, 200);
			dialog_Bg.animate({
				width : "99.6%"
			}, 300);
			box.animate({
				left : "0%"
			}, 500);
			box.animate({
				left : "28%"
			}, 500);
			box.animate({
				top : "30%"
			}, 550);
			box.animate({
				top : "22%"
			}, 200);
			box.animate({
				width : "900px"
			}, 300);
			box.animate({
				height : "600px"
			}, 700);
			box_head.animate({
				opacity : "1"
			}, 2500);
			box_head.animate({
				padding : "25px"
			}, 600);
			box_head.fadeIn('slow',function() {
				box_head.css("transition", "all 1200ms ease");
				Siteb.css("display", "block");
				Youtubeb.css("display", "block");
				plogo.css("display", "block");
				box_head.css("color", "rgba(242,242,242,1)");
				box_head.css("font", "bold 25px Tahoma");
				Siteb.delay(4000).css("opacity", "1");
				Youtubeb.delay(4000).css("opacity", "1");
				plogo.css("opacity", ".45");
				
			});
			
		});
	});
	
}

function closeDialogbox() {
	"use strict";
	var box = $(".box");
	var box_head = $('#preview_Head');
	var Siteb = $('#Siteb');
	var Youtubeb = $('#Youtubeb');
	var plogo = $('#plogo');
	var dialog_Bg = $('.dialog_box');
	var button = $('#button');
	$('#Siteb').click(function() {
		box_head.css("color", "rgba(242,242,242,0)");
		box_head.css("font", "bold 0px Tahoma");
		Siteb.css("display", "none");
		Youtubeb.css("display", "none");
		plogo.css("opacity", "0");		
		box_head.animate({
			opacity : "0"
				}, 1);
		box_head.animate({
			padding : "0px"
				}, 1);
		box.animate({
			height: "0px"
		}, 300);
		box.animate({
			width: "0px"
		}, 300);
		box.animate({
			top : "-200px"
		},150);
		dialog_Bg.animate({
				height : "0%"
			}, 1050);
		dialog_Bg.animate({
				width : "0%"
			}, 950);
				dialog_Bg.animate({
				opacity : "0"
				
			}, 350);
			dialog_Bg.animate({
				left : "995px"
				
			}, 10);
			
		button.attr('disabled', false);
	
		
	}); 
	
}

function Preview_p_innerHTML() {
	"use strict";
	var preview_P = $('#preview_P');
	$(document).ready(function() {
		preview_P.text('Pro Showcase >>>');
	});
}

function Loader() {
	"use strict";
	var pageBg = $('#pageLoader');
	var Home = $('.Home');
	var blue = $('#blue');
	var silBrown = $('#silverBrown');
	var greySil = $('#greySilver');
		Home.click(function() {
			//alert("Hey! Working!");
			pageBg.animate({
				height: "100%"
			}, 10);
			
			pageBg.animate({
				width: "100%"
			}, 180);
			
			blue.animate({
				width: "100%"
			},1500);
				
			silBrown.animate({
				width: "100%"
			},1700);
			
			greySil.animate({
				width: "100%"
			},2050);
			
			
			$('#INSLOGO').fadeIn('slow', function() {
				$(this).css("display", "block");
				$(this).css("transition", "all 2000ms ease");
				$(this).css("opacity", "1");
					
			});
			
			window.setTimeout(function() {
				window.location.href="https://www.google.com";
			}, 2100);
			
			
		});
}







window.addEventListener('load', main, false);
