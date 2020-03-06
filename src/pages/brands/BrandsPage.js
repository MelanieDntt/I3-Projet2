import React, { useEffect, useState } from 'react';
import './BrandsPage.scss';

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
          {/* <li>Anastasia Beverly Hills</li>
          <li>Beautyblender</li>
          <li>ColourPop</li>
          <li>Luxie</li>
          <li>Milani</li>
          <li>Tarte</li>
          <li>Too Faced</li>
          <li>Urban Decay</li> */}
          {brandsfinal.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </main>
  );
};

export default BrandsPage;
