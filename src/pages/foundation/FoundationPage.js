import React, { useEffect, useState } from 'react';
import './FoundationPage.scss';
import { A } from 'hookrouter';

const FoundationPage = () => {
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
        <div className="row">
          {makeup.map((item) => (item.type === 'foundation' ? (
            <div key={item.id} className="col s6 m6 l3">
              <A href={`/foundation/${item.id}`}>
                <img src={item.img[0]} alt="test" />
                <p>{item.brand}</p>
                <h3>{item.name}</h3>
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

export default FoundationPage;
