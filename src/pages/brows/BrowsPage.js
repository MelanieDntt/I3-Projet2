import React, { useState, useEffect } from 'react';
import './BrowsPage.scss';
import { A } from 'hookrouter';

const BrowsPage = () => {
  const [makeup, setMakeup] = useState([]);
  useEffect(() => {
    fetch('/json/data.json')
      .then((r) => r.json())
      .then((data) => setMakeup(data));
  }, []);

  return (
    <main>
      <section className="container">
        <h1>Brows</h1>
        <div className="row">
          {makeup.map((item) => (item.type === 'brows' ? (
            <div key={item.id} className="col s6 m6 l3">
              <A href={`/brows/${item.id}`}>
                <img src={item.img[0]} alt="test" />
                <h3>{item.name}</h3>
                <p>{item.brand}</p>
                <p>
                  {item.price}
                  {' '}
                  €
                </p>
              </A>
              <button type="button" className="waves-effect waves-light btn white black-text">Add to bag</button>
            </div>
          ) : ''))}
        </div>
      </section>
    </main>
  );
};

export default BrowsPage;
