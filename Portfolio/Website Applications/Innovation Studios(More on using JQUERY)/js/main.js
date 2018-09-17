// JavaScript Document

//var doc = $(document);
//var main_content = $('.main_showcase .container');


/*
	@author Conan Mafnas

*/

/*
	Note: GLOBAL VARIABLES IN DREAMWEAVER WITHIN LOCAL FUNCTIONS: DO NOT WORK
	Note: "use strict" required Dreamweaver
			- TO DO:: FIND A WAY TO MASK THIS WITHOUT USINING ON EVERY FUNCTION
	Note: For Loops
		- for (var i = 0; i < 12; i++) {
			var message += "Test";
			$(element).html || text.(message);
		}

*/

function main() {
	"use strict";
	fadeInMain();
	sideMenuClose();
	langProgBox();
	proShopSection();
}

function fadeInMain() {
	"use strict";
	$(document).ready(function() {
		$('.main_showcase .container').fadeIn('slow', function() {
			$('.main_showcase .container').css("opacity", "1");
		});	
	});
	
}

function sideMenuClose() {
	alert("Side Menu is temporarily disabled"); // Note: Need to fix the elements within the DOM
	/*
	"use strict";
	 var side_menu = $('.side_nav');
	 var side_menu_ul = $('.side_nav_ul');
	 var big_wrapper = $('.big_wrapper');
	 var top_nav_li = $('.top_nav ul');
	 var button = $('.top_nav #btn_span');
	 var side_logo = $('#side_logo');
	 var logo = $(".main_showcase .container #logo");
		button.click(function() {
			 side_menu.css("width", "0px");
			 side_menu_ul.css("margin-left", "-200px");
			 side_logo.css("left", "-200px");
			 big_wrapper.css("margin-left", "0px");
			 top_nav_li.css("margin-left", "9.5%");
			 logo.css("margin-left", "45%");
			 sideMenuOpen(); 
			 
		 });*/	 
}

function sideMenuOpen() {
	"use strict";
	 var side_menu = $('.side_nav');
	 var big_wrapper = $('.big_wrapper');
	 var top_nav_li = $('.top_nav ul');
	 var side_menu_ul = $('.side_nav_ul');
	 var button = $('.top_nav #btn_span');
	 var side_logo = $('#side_logo');
	 var logo = $(".main_showcase .container #logo");
		button.click(function() {
			 side_menu.css("width", "200px");
			 side_menu_ul.css("margin-left", "0px");
			 side_logo.css("left", "42px");
			 big_wrapper.css("margin-left", "201px");
			 top_nav_li.css("margin-left", ".05%");
			 logo.css("margin-left", "39.8%");
			 sideMenuClose();
			 
		 });
	
	 
}

function langProgBox(){
	"use strict";
	var boxes = $('#boxes');
	var div_box = $('.div_block1').offset().top/3.8;
	var HTMLI = $('#boxes .box #HTMLI');
	var CSSI = $('#boxes .box #CSSI');
	var JSI = $('#boxes .box #JSI');
	$(document).ready(function() {
		$(document).on('scroll', function() {
			if ($(document).scrollTop() > div_box) {
				boxes.css("transition", "all 700ms ease");
				window.setTimeout(function() {
					 
						HTMLI.css("opacity", "1");
						CSSI.css("opacity", "1");
						JSI.css("opacity", "1");
				
				}, 100);
				
				boxes.animate({
					"margin-top": "145px"
				}, 0);
			} 
			
		});
	});
}

function proShopSection() {
	"use strict";
	$(document).ready(function()  {
		$(document).on('scroll', function() {
			var forth_showcase = $(".forth_showcase .container").offset().top/2;
			var T = $('#T');
			//var banner = ('#banner');
			//var proButton = ('#View_Pro');
			if ($(document).scrollTop() > forth_showcase) {
				T.css("opacity", "1");
				T.css("margin-top", "5%");
			}
		});
	});
}

window.addEventListener('load', main, false);


