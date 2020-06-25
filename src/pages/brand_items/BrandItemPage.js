import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { A } from 'hookrouter';
import './BrandItemPage.scss';

const BrandItemPage = ({ brand, addToBag }) => {
  const [makeup, setMakeup] = useState([]);
  useEffect(() => {
    fetch('/json/data.json')
      .then((r) => r.json())
      .then((data) => setMakeup(data));
  }, []);
  const newBrand = brand.replace(/%20/g, ' ');

  return (
    <main>
      <section className="container">
        <h1>{newBrand}</h1>
        <div className="lister-grid">
          {makeup.map((item) => (item.brand === newBrand ? (
            <>
              <div className="lister-div-container">
                <div className="lister-div" key={item.id}>
                  <A href={`/brands/${item.brand}/${item.id}`}>
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
            </>
          ) : ''))}
        </div>
      </section>
    </main>
  );
};

BrandItemPage.propTypes = {
  brand: PropTypes.string.isRequired,
  addToBag: PropTypes.func.isRequired,
};

export default BrandItemPage;
