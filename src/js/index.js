import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

$(window).on('scroll', function(){
    var scrollTop = $(this).scrollTop();
    if(scrollTop + $(this).innerHeight() >= this.scrollHeight){
        console.log("end");
    }else if(scrollTop <= 0){        
        $("nav").addClass("navbar-first");
        $("nav").removeClass("navbar-dark");
        $("nav").removeClass("navbar-scroll");      
        }else{
        $("nav").removeClass("navbar-first");
        $("nav").addClass("navbar-dark");
        $("nav").addClass("navbar-scroll");
    }
});


$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

var result = bowser.getParser(window.navigator.userAgent);

if(result.parsedResult.platform.type==="mobile"){
    let background =document.getElementById("videoback");
    let container = document.getElementById("videocontainer");
    background.style.display="none";
    var newImg = document.createElement("img");
    newImg.setAttribute("src", "https://images.pexels.com/photos/3998429/pexels-photo-3998429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    newImg.style.width="100%";
    newImg.style.height="100%";
    newImg.style.objectFit="cover";
    container.appendChild(newImg);  
}


