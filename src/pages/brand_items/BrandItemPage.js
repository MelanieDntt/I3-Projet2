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

  return (
    <main>
      <section className="container">
        <div className="row">
          {makeup.map((item) => (item.brand === brand ? (
            <>
              <div className="col s6 m6 l3">
                <A href={`/brands/${item.brand}/${item.id}`} key={item.name}>
                  <img src={item.img[0]} alt="test" />
                  <h3>{item.name}</h3>
                  <p>{item.brand}</p>
                  <p>
                    {item.price}
                    {' '}
                    €
                  </p>
                </A>
                <button type="button" className="waves-effect waves-light btn white black-text" onClick={() => addToBag(item)}>Add to bag</button>
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
