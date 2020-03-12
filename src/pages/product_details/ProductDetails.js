import React, { useState, useEffect } from 'react';
import './ProductDetails.scss';
// import $ from 'jquery';
// import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/owl.carousel';
import PropTypes from 'prop-types';
import NotFoundPage from '../NotFoundPage';

const ProductDetails = ({ id, addToBag }) => {
  const [makeup, setMakeup] = useState([]);

  useEffect(() => {
    fetch('/json/data.json')
      .then((r) => r.json())
      .then((data) => setMakeup(data));
  }, []);

  // $(document).ready(() => {
  //   $('#owl-demo').owlCarousel({
  //     navigation: true, // Show next and prev buttons
  //     slideSpeed: 300,
  //     paginationSpeed: 400,
  //     singleItem: true,
  //   });
  // });


  return (
    <main>
      <section className="container">
        {makeup.map((item) => (item.id === id
          ? (
            <div key={item.id}>
              {/* <div id="owl-demo" className="owl-carousel owl-theme">
                <div className="item"><img src={item.img[0]} alt="test" /></div>
                <div className="item"><img src={item.img[1]} alt="test" /></div>
              </div> */}

              <div><img src={item.img[0]} alt={item.id} /></div>
              <h2>{item.brand}</h2>
              <h3>{item.name}</h3>
              <p>
                {item.price}
                {' '}
                €
              </p>
              <button type="button" className="waves-effect waves-light btn light-green lighten-1" onClick={() => addToBag(item)}>Add to bag</button>
              <h4>Description</h4>
              <p>{item.description}</p>
            </div>
          )
          : <NotFoundPage />))}
      </section>
    </main>
  );
};

ProductDetails.propTypes = {
  id: PropTypes.string.isRequired,
  addToBag: PropTypes.func.isRequired,
};


export default ProductDetails;
