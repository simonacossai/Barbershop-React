import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";


function Footer() {
    var FooterImg = require('../img/prodotti capelli.jpg');
    var FooterImg2 = require('../img/100819993_1724683807655521_892917163898175488_o.jpg');
    var FooterImg3 = require('../img/103572263_1750602498396985_3396044803307228721_o.jpg');
    var FooterImg4 = require('../img/98195365_1710015682455667_5095352030910742528_o.jpg');
    var FooterImg5 = require('../img/prodotti per  barba.jpg');
    var FooterImg6 = require('../img/56321843_1065746206882621_911114940331327488_o.jpg');
    var FooterImg1 = require('../img/icon-2073970_640.png');

    return (
        <footer className="footer" style={{paddingBottom: '15px'}}>
        <div className="container">
          <div className="about-us">
            <h2>Dove siamo<img src={FooterImg1} style={{width: '60px', height: '70px'}} /></h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.610679941778!2d14.310196315416167!3d41.07750197929378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133a55bc2ae85be1%3A0x7129f679ec783f3f!2sMenditto%20Barber%20Shop!5e0!3m2!1sit!2sit!4v1595084139796!5m2!1sit!2sit" width={270} height={210} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
          </div>
          <div className="instagram">
            <a href="https://www.instagram.com/mendittobarbershop/?hl=it" target="_blank" style={{textDecoration: 'none'}}>
              <h2>Instagram</h2>
              <div className="flex-row" style={{marginTop: '25px'}}>
                <img src={FooterImg} alt="prodotti capelli" />
                <img src={FooterImg2} alt="insta2" />
                <img src={FooterImg3} alt="insta3" />
              </div>
              <div className="flex-row">
                <img src={FooterImg4} alt="insta4" />
                <img src={FooterImg5} alt="prodotti per la barba" />
                <img src={FooterImg6} alt="insta6" />
              </div>
            </a>
          </div>
          <div className="follow">
            <h2>Seguici su</h2>
            <div className="social-icons" style={{marginTop: '20px'}}>
              <a href="https://www.facebook.com/InnocenzoMenditto" target="_blank"><FontAwesomeIcon icon={faFacebook} style={{color: '#ffff', fontSize:"30px"}}  /></a>
              <a href="https://www.instagram.com/mendittobarbershop/?hl=it" target="_blank"><FontAwesomeIcon icon={faInstagram} style={{color: '#ffff', fontSize:"30px", marginLeft: "10px"}}  /></a>
            </div>
            <h3 style={{color: '#fff', marginTop: '30px', fontWeight: 'bold'}}>Chiama per prenotare:</h3>
            <a href="tel:331 987 9197" className="call">
              <h5 style={{color: '#fff'}}><FontAwesomeIcon icon={faPhoneAlt}  style={{color: '#b28957', marginRight: "10px"}} />331 987 9197</h5>
            </a>
          </div>
        </div>
        <div className="footer-text" style={{textAlign: 'center', margin: 0}}>
          <p style={{textAlign: 'center', marginBottom: 0, color: '#fff'}}>Copyright 2020 © Menditto Barbershop</p>
        </div>
        <div className="move-up">
          <span><a href="#" className="arrow" style={{textDecoration: 'none', color: '#b28957'}}><i className="fas fa-arrow-circle-up fa-2x" /></a></span>
        </div>
      </footer>
    )
}

export default Footer;