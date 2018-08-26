
	const mainBoxes = function() {
    //cacheDOM
		const box1 = document.getElementById("box-1");
		const box2 = document.getElementById("box-2");
		const box3 = document.getElementById("box-3");
		//render
		this.render = function() {
			animations();
		};

		//Methods for the boxes
		let animations = function() {

		   let box1Animate = function() {
					box1.style.opacity=".2";
					box1.style.transition="all 1000ms ease"; 
					box1.style.top="45%";
			  
			
				window.setTimeout(function() {
					box1.style.boxShadow="0px 0px 55px 0px rgba(255, 255, 255, 0.7)";
					box1.style.border="2px solid rgba(110,110,110,.6)";
					box1.style.opacity="1";
				}, 400);
				window.setTimeout(function() {
					box1.style.boxShadow="0px 0px 55px 0px rgba(0, 225, 255, 0.884)";
				},930); 
			   /* window.setTimeout(function() {
					box1.style.boxShadow="0px 0px 55px 1px rgba(0, 225, 255, 0.884)";
				},1150) */
			};
			box1Animate();

			let box2Animate = function() {
				box2.style.opacity=".5";
				box2.style.transition="all 1000ms ease"; 
				box2.style.top="45%";
				window.setTimeout(function() {
				box2.style.boxShadow="0px 0px 55px 0px rgba(0, 225, 255, 0.884)";
				box2.style.opacity="1";
				}, 400);
				window.setTimeout(function() {
					box2.style.boxShadow="0px 0px 55px 0px rgba(255, 255, 255, 0.7)";
				},800);
			 /*   window.setTimeout(function() {
					box2.style.boxShadow="0px 0px 55px 1px rgba(255, 255, 255, 0.7)";
				},1550) */
			};

			box2Animate();

			let box3Animate = function() {
				box3.style.opacity=".2";
				box3.style.transition="all 1000ms ease"; 
				box3.style.top="45%";
				window.setTimeout(function() {
				box3.style.boxShadow="0px 0px 55px 0px rgba(255, 255, 255, 0.7)";
				box3.style.opacity="1";
				}, 400);
				window.setTimeout(function() {
					box3.style.boxShadow="0px 0px 55px 0px rgba(0, 225, 255, 0.884)";
				},930); 
			 /*   window.setTimeout(function() {
					box3.style.boxShadow="0px 0px 55px 1px rgba(0, 225, 255, 0.884)";
				},1850) */
			};
			box3Animate(); 

		};

};



const boxMouseOver = function() {
	// cacheDOM
	const box12 = document.getElementById("box-1");
	const box12A = document.querySelector(".main_showcase #box-1 .template");
	const box13 = document.getElementById("box-2");
	const box13A = document.querySelector(".main_showcase #box-2 .template");
	const box14 = document.getElementById("box-3");
	const box14A = document.querySelector(".main_showcase #box-3 .template");

	//render
	this.render = function() {
		mouseInn();
		mouseOutt();
	}

	let mouseInn = function() {
		box12.addEventListener("mouseover", function() {
			box12A.style.transition="all 1000ms ease";
			box12A.style.height="340px";
		});
		box13.addEventListener("mouseover", function() {
			box13A.style.transition="all 1000ms ease"; 
			box13A.style.height="340px";
		}); 
		box14.addEventListener("mouseover", function() {
			box14A.style.transition="all 1000ms ease"; 
			box14A.style.height="340px";
		}); 
	}

	let mouseOutt = function() {
		box12.addEventListener("mouseout", function() {
			box12A.style.transition="all 1000ms ease";
			box12A.style.height="0px";
		});
		box13.addEventListener("mouseout", function() {
			box13A.style.transition="all 1000ms ease";
			box13A.style.height="0px";
		});
		box14.addEventListener("mouseout", function() {
			box14A.style.transition="all 1000ms ease";
			box14A.style.height="0px";
		});
	}
};

const mainShowAnimate = function() {

	this.render = function() {
		let main_showcase = $(".main_showcase");
			main_showcase.animate({
				opacity: "1"
			}, 240);
	}
	
};




const mainAnimate = new mainShowAnimate();
const mainBoxesA = new mainBoxes();
const box1A = new boxMouseOver();



function Loader() {
	mainBoxesA.render();
	box1A.render();
	mainAnimate.render();
 
}

window.addEventListener("load", Loader, false);





    







