import React from 'react';
import './Galleria.css';
import { SRLWrapper } from "simple-react-lightbox";

function Galleria() {
    var GalleryImg = require('../img/100819993_1724683807655521_892917163898175488_o.jpg');
    var GalleryImg1 = require('../img/certificatocovid.jpg');
    var GalleryImg2 = require('../img/negozioeprodotti (1).jpg');
    var GalleryImg3 = require('../img/prodotti per  barba.jpg');
    var GalleryImg4 = require('../img/sedia barbiere.jpg');
    var GalleryImg5 = require('../img/103572263_1750602498396985_3396044803307228721_o.jpg');
    var GalleryImg6 = require('../img/prodotti capelli.jpg');
    var GalleryImg7 = require('../img/98195365_1710015682455667_5095352030910742528_o.jpg');
    var GalleryImg8 = require('../img/photo5807631688363258983.jpg');

    return (
        <div>
        <div className="container text-center" id="gallery" style={{marginTop: '6em'}}>
          <h1 style={{fontWeight: 500, fontSize: '2.8em'}}>Galleria</h1>
        </div>
        <SRLWrapper>
        <div className="container gallery">
          <div className="row">
            <div className="col-md-4">
              <a href={GalleryImg} data-lightbox="image-1"><img src={GalleryImg} className="img-fluid" /></a>
            </div>
            <div className="col-md-4">
              <a href={GalleryImg1} data-lightbox="image-1"><img src={GalleryImg1} className="img-fluid" /></a>
            </div>
            <div className="col-md-4">
              <a href={GalleryImg2} data-lightbox="image-1"><img src={GalleryImg2} className="img-fluid" /></a>
            </div>
            <div className="col-md-4">
              <a href={GalleryImg3} data-lightbox="image-1"><img src={GalleryImg3} className="img-fluid" /></a>
            </div>
            <div className="col-md-4">
              <a href={GalleryImg4} data-lightbox="image-1"><img src={GalleryImg4} className="img-fluid" /></a>
            </div>
            <div className="col-md-4">
              <a href={GalleryImg5} data-lightbox="image-1"><img src={GalleryImg5} className="img-fluid" /></a>
            </div>
            <div className="col-md-4">
              <a href={GalleryImg6} data-lightbox="image-1"><img src={GalleryImg6} className="img-fluid" /></a>
            </div>
            <div className="col-md-4">
              <a href={GalleryImg7} data-lightbox="image-1"><img src={GalleryImg7} className="img-fluid" /></a>
            </div>
            <div className="col-md-4">
              <a href={GalleryImg8} data-lightbox="image-1"><img src={GalleryImg8} className="img-fluid" /></a>
            </div>
          </div>
        </div>
        </SRLWrapper>
      </div>
    )
}

export default Galleria
