import React from 'react';
import './About.css';
import {Link} from 'react-scroll';

function About() {
  var aboutImg = require('../img/sedia da barbiere.jpg');
    return (
        <div>
        <section id="about">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-6">
              <div className="pray">
                <img src={aboutImg} alt="sedia da barbiere" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="panel text-left">
                <h1>Su di noi</h1>
                <p className="pt-4" style={{marginBottom: '20px'}}>
                  Siamo la famiglia di barbieri più antica di Casagiove, in attività da più di 50 anni.
                  In un connubio di old-school e novità, Menditto Barbershop ti offre tagli classici, rasature e
                  trattamenti particolari come black mask e <b>hot towel shaves</b> dedicati alla cura della tua barba e del
                  tuo
                  volto.
                  Perchè sceglierci?
                </p>
                <p>
                  La nostra forza è la cura nei particolari: sei <b>TU</b> a chiedere e noi ad eseguire, garantendoti
                  massima precisione nei tagli, nelle rasature e pura qualità nei prodotti scelti.
                  La nostra soddisfazione è e sarà sempre <b>solo</b> vederti sorridente con il tuo nuovo taglio.
                </p>
                <Link to="gallery" smooth={true} duration={900}> <button type="button" className="btn" >Scopri di più</button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}

export default About;
