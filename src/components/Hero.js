import React from 'react';
import './Hero.css';
import { faCut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Hero() {
  var heroVideo = require('../img/taglio barba.mp4');
  var image = require('../img/barber.jpg');

    return (
             <section className="showcase" id="showcase">
          <div className="video-container" id="videocontainer">
          <img className="image" id="imageId" src={image}></img>
            <video className="video" src={heroVideo} id="videoback"  autoPlay="autoplay" loop="loop" controls="true" muted type="video/mp4" />
          </div>
          <div className="content">
            <h1 className="hero-title"><span className="first-letter">w</span>elcome</h1>
            <h3 className="name-shop">Menditto</h3>
            <div className="headline-description">
              <div className="separator">
                <div className="line line-left" />
                <div className="asterisk"><FontAwesomeIcon icon={faCut}  style={{color: '#b28957'}} /></div>
                <div className="line line-right" />
              </div>
              <h5 className="barber-shop" style={{fontWeight: 500}}>Barber shop</h5>
            </div>
          </div>
        </section>
    
    )
}

export default Hero;

