import React from 'react';
import './Services.css';


function Services() {
    var imageName = require('../img/forbici barbiere.png');
    var imageName1 = require('../img/sedia-barbiere.png');
    var imageName2 = require('../img/phon.png');
    var imageName3 = require('../img/baffi.png');
    return (
      
             <section id="services">
        <h1>I nostri servizi</h1>
        <div className="services">
          <div className="row center">
            <div id="card-1" className="card rounded">
              <div className="card__image" style={{marginBottom: '60px'}}>
                <img src={imageName} alt="forbici da barbiere" />
              </div>
              <div className="card_heading" style={{marginTop: '50px', display: 'block'}}>
                <h2>Taglio</h2>
                <p>Siamo sempre attenti ai
                  trend del momento per offrire look all'ultimo grido
                  rivisitati in chiave <b>Old School</b>.</p>
              </div>
            </div>
            <div id="card-2" className="card rounded">
              <div className="card__image" style={{marginBottom: '80px'}}>
                <img src={imageName1} alt="sedia da barbiere" />
              </div>
              <div className="card_heading">
                <h2>Trattamenti</h2>
                <p>Hot towel shaving, black mask e molto altro per regalarti momenti di puro relax.</p>
              </div>
            </div>
            <div id="card-3" className="card rounded">
              <div className="card__image" style={{marginBottom: '80px'}}>
                <img src={imageName2} alt="asciuga capelli" />
              </div>
              <div className="card_heading">
                <h2>Shampoo</h2>
                <p>La varietà dei prodotti scelti per la cura dei tuoi capelli ci permette di soddisfare ogni tua esigenza
                </p>
              </div>
            </div>
            <div id="card-4" className="card rounded">
              <div className="card__image" style={{marginBottom: '80px'}}>
                <img src={imageName3} alt="baffi barba" />
              </div>
              <div className="card_heading" style={{padding: '3px'}}>
                <h2>Rasatura</h2>
                <p>Rasatura tradizionale arricchita anche con trattamenti con panni caldi e molto altro.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
   
    )
}

export default Services
