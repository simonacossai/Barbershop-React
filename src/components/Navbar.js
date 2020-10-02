import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { faCut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-scroll';
import $ from 'jquery';
function Navbar() {
  
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
    return (
       
        <nav className="navbar navbar-expand-lg  fixed-top py-3" id="mainNav">
        <div className="container">
          <Link to="showcase" className="navbar-brand js-scroll-trigger" smooth={true} duration={900}><FontAwesomeIcon icon={faCut}  style={{color: '#b28957', marginRight: '3px'}} /> Menditto</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="about" smooth={true} duration={900}>Su di noi</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="services" smooth={true} duration={900}>Servizi</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="pricing" smooth={true} duration={900}>Listino prezzi</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="testimonials" smooth={true} duration={900}>Dicono di noi</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="gallery" smooth={true} duration={900}>Galleria</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
       
    )
}

export default Navbar;
