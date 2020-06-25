import React, { useState, useEffect } from 'react';
import './EyeshadowPalette.scss';
import { A } from 'hookrouter';
import PropTypes from 'prop-types';

const EyeshadowPalettePage = ({ addToBag }) => {
  const [makeup, setMakeup] = useState([]);
  useEffect(() => {
    fetch('/json/data.json')
      .then((r) => r.json())
      .then((data) => setMakeup(data));
  }, []);

  return (
    <main>
      <section className="container">
        <h1>Eyeshadow Palette</h1>
        <div className="lister-grid">
          {makeup.map((item) => (item.type === 'eyeshadow palette' ? (
            <div className="lister-div-container">
              <div key={item.id} className="lister-div">
                <A href={`/eyeshadow_palette/${item.id}`}>
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
                  <button type="button" className="waves-effect waves-light btn white black-text" onClick={() => { addToBag(item); item.quantity = 1; }}>Add to bag</button>
                </div>
              </div>
            </div>
          ) : ''))}
        </div>
      </section>
    </main>
  );
};

EyeshadowPalettePage.propTypes = {
  addToBag: PropTypes.func.isRequired,
};

export default EyeshadowPalettePage;
