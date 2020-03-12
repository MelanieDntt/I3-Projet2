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
        <div className="row">
          {makeup.map((item) => (item.brand === newBrand ? (
            <>
              <div className="col s6 m6 l3" key={item.name}>
                <A href={`/brands/${item.brand}/${item.id}`}>
                  <img src={item.img[0]} alt={item.id} />
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
          ) : <h1>Not Found Page</h1>))}
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
