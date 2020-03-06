import React, { useState, useEffect } from 'react';

const FoundationDetails = () => {
  const [makeup, setMakeup] = useState([]);
  useEffect(() => {
    fetch('/json/data.json')
      .then((r) => r.json())
      .then((data) => setMakeup(data));
  }, []);

  return (
    <main>
      <section className="container">
        {makeup.map((item) => (
          <div key={item.id}>
            <h1>{item.brand}</h1>
            <h2>{item.name}</h2>
          </div>
        ))}
      </section>
    </main>
  );
};

export default FoundationDetails;
