import React, { useEffect, useState } from 'react';
import './BrandsPage.scss';
import { A } from 'hookrouter';

const BrandsPage = () => {
  const [makeup, setMakeup] = useState([]);
  useEffect(() => {
    fetch('/json/data.json')
      .then((r) => r.json())
      .then((data) => setMakeup(data));
  }, []);
  const brands = [];
  makeup.forEach((item) => brands.push(item.brand));
  const newBrands = new Set(brands);
  const brandsfinal = Array.from(newBrands);

  return (
    <main>
      <div className="container brands">
        <h1>Brands</h1>
        <ul>
          {brandsfinal.map((brand) => <li key={brand}><A href={`brands/${brand}`}>{brand}</A></li>)}
        </ul>
      </div>
    </main>
  );
};

export default BrandsPage;
