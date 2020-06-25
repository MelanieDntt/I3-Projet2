import React, { useState, useEffect } from 'react';
import './MascaraPage.scss';
import { A } from 'hookrouter';
import PropTypes from 'prop-types';

const MascaraPage = ({ addToBag }) => {
  const [makeup, setMakeup] = useState([]);
  useEffect(() => {
    fetch('/json/data.json')
      .then((r) => r.json())
      .then((data) => setMakeup(data));
  }, []);

  return (
    <main>
      <section className="container">
        <h1>Mascara</h1>
        <div className="lister-grid">
          {makeup.map((item) => (item.type === 'mascara' ? (
            <div className="lister-div-container">
              <div key={item.id} className="lister-div">
                <A href={`/mascara/${item.id}`}>
                  <div>
                    <img src={item.img[0]} alt="test" />
                  </div>
                  <div>
                    <h3>{item.name}</h3>
                    <p className="brand-uppercase">{item.brand}</p>
                    <p>
                      {item.price}
                      {' '}
                      €
                    </p>
                  </div>
                </A>
                <div className="button-container">
                  <button type="button" className="waves-effect waves-light btn white black-text btn-add-to-bag" onClick={() => { addToBag(item); item.quantity = 1; }}>Add to bag</button>
                </div>
              </div>
            </div>
          ) : ''))}
        </div>
      </section>
    </main>
  );
};

MascaraPage.propTypes = {
  addToBag: PropTypes.func.isRequired,
};

export default MascaraPage;
