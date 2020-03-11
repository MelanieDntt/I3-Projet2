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
        <div className="row">
          {makeup.map((item) => (item.type === 'mascara' ? (
            <div key={item.id} className="col s6 m6 l3">
              <A href={`mascara/${item.id}`}>
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
          ) : ''))}
        </div>
      </section>
    </main>
  );
};

MascaraPage.propTypes = {
  addToBag: PropTypes.func,
};

export default MascaraPage;
