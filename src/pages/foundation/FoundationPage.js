import React, { useEffect, useState } from 'react';
import './FoundationPage.scss';
import { A } from 'hookrouter';
import PropTypes from 'prop-types';

const FoundationPage = ({ addToBag }) => {
  const [makeup, setMakeup] = useState([]);
  useEffect(() => {
    fetch('/json/data.json')
      .then((r) => r.json())
      .then((data) => setMakeup(data));
  }, []);

  return (
    <main>
      <section className="container">
        <h1>Foundation</h1>
        <div className="lister-grid">
          {makeup.map((item) => (item.type === 'foundation' ? (
            <div className="lister-div-container">
              <div key={item.id} className="lister-div">
                <A href={`/foundation/${item.id}`}>
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

FoundationPage.propTypes = {
  addToBag: PropTypes.func.isRequired,
};

export default FoundationPage;
