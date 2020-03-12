import React, { useState, useEffect } from 'react';
import './EyelinerPage.scss';
import { A } from 'hookrouter';
import PropTypes from 'prop-types';

const EyelinerPage = ({ addToBag }) => {
  const [makeup, setMakeup] = useState([]);
  useEffect(() => {
    fetch('/json/data.json')
      .then((r) => r.json())
      .then((data) => setMakeup(data));
  }, []);

  return (
    <main>
      <section className="container">
        <h1>Eyeliner</h1>
        <div className="row">
          {makeup.map((item) => (item.type === 'eyeliner' ? (
            <div key={item.id} className="col s6 m6 l3">
              <A href={`/eyeliner/${item.id}`}>
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

EyelinerPage.propTypes = {
  addToBag: PropTypes.func.isRequired,
};

export default EyelinerPage;
