import React from 'react';
import './ListinoPrezzi.css';

function ListinoPrezzi() {
    return (
        <div id="generic_price_table" style={{marginTop: '5rem'}}>
        <section id="pricing">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="price-heading clearfix">
                  <h1 style={{color: 'black'}}>Listino prezzi</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="container ">
            <div className="row">
              <div className="col-md-4 ">
                <div className="generic_content clearfix panel-pricing">
                  <div className="generic_head_price clearfix">
                    <div className="generic_head_content clearfix">
                      <div className="head_bg" />
                      <div className="head">
                        <span>Old classic</span>
                      </div>
                    </div>
                    <div className="generic_price_tag clearfix">
                      <span className="price">
                        <span className="sign">Beard</span>
                        <span className="currency" />
                        <span className="cent" />
                      </span>
                    </div>
                  </div>
                  <div className="generic_feature_list">
                    <ul>
                      <li><span>Classic shave<br />
                          Shaving + hot towel</span> 5,00€</li>
                      <li><span>Classic beard <br />
                          Beard + hot towel </span> 5,00€</li>
                    </ul>
                  </div>
                  <div className="generic_price_btn clearfix">
                    <a href="tel:331 987 9197">Chiama ora</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="generic_content active clearfix panel-pricing">
                  <div className="generic_head_price clearfix">
                    <div className="generic_head_content clearfix">
                      <div className="head_bg" />
                      <div className="head">
                        <span>Basici</span>
                      </div>
                    </div>
                    <div className="generic_price_tag clearfix">
                      <span className="price">
                        <span className="sign">Capelli</span>
                        <span className="currency" />
                        <span className="cent" />
                      </span>
                    </div>
                  </div>
                  <div className="generic_feature_list">
                    <ul>
                      <li><span>Taglio </span>10,00€</li>
                      <li><span>Shampoo </span>5,00€</li>
                    </ul>
                  </div>
                  <div className="generic_price_btn clearfix">
                    <a href="tel:331 987 9197">Chiama ora</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="generic_content clearfix panel-pricing">
                  <div className="generic_head_price clearfix">
                    <div className="generic_head_content clearfix">
                      <div className="head_bg" />
                      <div className="head">
                        <span>Relax</span>
                        <span className="currency" />
                        <span className="cent" />
                      </div>
                    </div>
                    <div className="generic_price_tag clearfix">
                      <span className="price">
                        <span className="sign">Barba e trattamenti</span>
                        <span className="currency" />
                        <span className="cent" />
                      </span>
                    </div>
                  </div>
                  <div className="generic_feature_list">
                    <ul>
                      <li><span>Relax shave <br />
                          Shaving + hot towel + black mask </span>10,00€</li>
                      <li><span>Relax beard <br />
                          Beard + hot towel + black mask </span>10,00€</li>
                    </ul>
                  </div>
                  <div className="generic_price_btn clearfix">
                    <a href="tel:331 987 9197">Chiama ora</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
}

export default ListinoPrezzi;
