import React, { useState, useEffect } from 'react';
import { A } from 'hookrouter';
import PropTypes from 'prop-types';

const ArticlesList = ({ addToBag }) => {
  const [makeup, setMakeup] = useState([]);
  useEffect(() => {
    fetch('/json/data.json')
      .then((r) => r.json())
      .then((data) => setMakeup(data));
  }, []);

  return (
    <div className="row">
      {makeup.map((item) => (item.category === 'accessories' ? (
        <div key={item.id} className="col s6 m6 l3">
          <A href={`/accessories/${item.id}`}>
            <img src={item.img[0]} alt="test" />
            <h3>{item.name}</h3>
            <p>{item.brand}</p>
            <p>
              {item.price}
              {' '}
              €
            </p>
          </A>
          <button type="button" className="waves-effect waves-light btn white black-text" onClick={() => { addToBag(item); item.quantity = 1; }}>Add to bag</button>
        </div>
      ) : ''))}
    </div>
  );
};

ArticlesList.propTypes = {
  addToBag: PropTypes.func.isRequired,
};

export default ArticlesList;
