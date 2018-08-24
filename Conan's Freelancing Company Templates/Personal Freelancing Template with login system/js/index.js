
const dropVideo = function() {
    //cacheDOM

    let main = document.querySelector(".main_showcase .video_bg");

    //render

    const render = function() {
        drop();
    }

    //dropMethod

    let drop = function () {
        main.style.transition="all 1000ms ease";
        main.style.marginTop="14%";
        window.setTimeout(function() {
            main.style.marginTop="12%";
        }, 900);
       
    }

    render();
}

const buttonBOXC = function() {
    //cacheDOM
    let button = document.querySelector(".main_showcase .video_bg button")

    //render

    const render = function() {
            colorChange();
    }

    //method

    let colorChange = function() {
        setInterval(function() {
           
            button.style.boxShadow="0px 0px 50px 2px rgba(240, 241, 241, 0.35)";
            clearInterval();
        }, 1000); 
    }

    render();
}


function main () {
    dropVideo();
   // buttonBOXC();
}

window.addEventListener("load", main, false);