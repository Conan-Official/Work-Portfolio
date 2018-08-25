
/* -----

    -- author Conan Mafnas
    -- idea Lenny

        */
const scrollNav = function() {
    //cacheDOM
    let nav_bar = document.querySelector('.top_nav');
    let list = document.querySelector(".top_nav ul li");
    let li = document.getElementsByTagName("li");
    let logo = document.getElementById("logo");
    let logo12 = document.getElementById("logo12");
    let span = document.querySelector(".top_nav .btn-span");
    let block = document.querySelector("#nav-block");
    let img1 = document.getElementById("bannerframe1");
    let img2 = document.getElementById("bannerframe2");
    //render
    this.render = function() {
        scroll();
    }
    //methods

    let checkPage = function() {
        if (window.pageYOffset > 0) {
            logo12.style.opacity="0";
            nav_bar.style.transition="all 400ms ease";
            nav_bar.style.height="55px";
            logo.style.left="30%";
            logo.style.top="3%"; 
            list.style.marginLeft="8%";
            for (let i = 0; i < li.length; i++) {
                li[i].style.transition="all 400ms ease";
                li[i].style.lineHeight="20px";
            }   
               logo.style.opacity="1";
               block.style.transition="all 400ms ease";
               block.style.height="55px";
               block.style.opacity="0";
        } else if (window.pageYOffset <=0) {
            logo12.style.opacity=".8";
        }
    }
    let scroll = function() {
        checkPage();
        window.addEventListener("scroll", function(e) {
            e.preventDefault();
            console.log(window.pageYOffset);
            if (window.pageYOffset <= 0) {
                nav_bar.style.transition="all 550ms ease";
                nav_bar.style.height="200px";
                logo.style.left="45%";
                logo.style.top="10%";
                logo.style.transition="all 500ms ease";
                list.style.marginLeft="0%";
                span.style.display="none";
                logo.style.opacity="0";
                logo12.style.opacity="1";
                block.style.transition="all 550ms ease";
                block.style.height="200px";
                img1.style.transition="all 850ms ease";
                img1.style.width="25%";
                img2.style.transition="all 850ms ease";
                img2.style.width="25%";
                for (let i = 0; i < li.length; i++) {
                    li[i].style.transition="all 550ms ease";
                    li[i].style.lineHeight="315px";
                }
            } else if (window.pageYOffset > 0) {
                nav_bar.style.transition="all 700ms ease";
                nav_bar.style.height="55px";
                logo.style.left="30%";
                logo.style.top="3%"; 
                list.style.marginLeft="8%";
                img1.style.transition="all 900ms ease";
                img1.style.width="10%";
                img2.style.transition="all 900ms ease";
                img2.style.width="10%";
                for (let i = 0; i < li.length; i++) {
                    li[i].style.transition="all 700ms ease";
                    li[i].style.lineHeight="20px";
                }   
                   logo.style.opacity="1";
                   logo12.style.opacity="0";
                   block.style.transition="all 550ms ease";
                   block.style.height="55px";
                   block.style.opacity="0";
             
            }
        });
    }

    
}

const topScroll = new scrollNav(); 

function loader() {
    topScroll.render();
}

window.addEventListener('load', loader, false);




