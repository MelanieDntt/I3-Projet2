import React, { useState, useEffect } from 'react';
import './ProductDetails.scss';
import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/owl.carousel';
import PropTypes from 'prop-types';

const ProductDetails = ({ id }) => {
  const [makeup, setMakeup] = useState([]);

  useEffect(() => {
    fetch('/json/data.json')
      .then((r) => r.json())
      .then((data) => setMakeup(data));
  }, []);

  // $(document).ready(() => {
  //   const bigimage = $('#big');
  //   const thumbs = $('#thumbs');
  //   const syncedSecondary = true;
  //   bigimage
  //     .owlCarousel({
  //       items: 1,
  //       slideSpeed: 2000,
  //       nav: true,
  //       dots: false,
  //       loop: true,
  //       responsiveRefreshRate: 200,
  //     })
  //     .on('changed.owl.carousel', syncPosition);

  //   thumbs
  //     .on('initialized.owl.carousel', () => {
  //       thumbs
  //         .find('.owl-item')
  //         .eq(0)
  //         .addClass('current');
  //     })
  //     .owlCarousel({
  //       items: 4,
  //       dots: true,
  //       nav: true,
  //       smartSpeed: 200,
  //       slideSpeed: 500,
  //       slideBy: 4,
  //       responsiveRefreshRate: 100,
  //     })
  //     .on('changed.owl.carousel', syncPosition2);

  //   function syncPosition(el) {
  //     // to disable loop, comment this block
  //     console.log(el);
  //     const count = el.item.count - 1;
  //     let current = Math.round(el.item.index - el.item.count / 2 - 0.5);
  //     if (current < 0) {
  //       current = count;
  //     }
  //     if (current > count) {
  //       current = 0;
  //     }
  //     // to this
  //     thumbs
  //       .find('.owl-item')
  //       .removeClass('current')
  //       .eq(current)
  //       .addClass('current');
  //     const onscreen = thumbs.find('.owl-item.active').length - 1;
  //     console.log(onscreen);
  //     const start = thumbs
  //       .find('.owl-item.active')
  //       .first()
  //       .index();
  //     const end = thumbs
  //       .find('.owl-item.active')
  //       .last()
  //       .index();
  //     console.log(end);
  //     if (current > end) {
  //       thumbs.data('owl.carousel').to(current, 100, true);
  //     }
  //     if (current < start) {
  //       thumbs.data('owl.carousel').to(current - onscreen, 100, true);
  //     }
  //   }

  //   function syncPosition2(el) {
  //     if (syncedSecondary) {
  //       const number = el.item.index;
  //       bigimage.data('owl.carousel').to(number, 100, true);
  //     }
  //   }

  //   thumbs.on('click', '.owl-item', function (e) {
  //     e.preventDefault();
  //     const number = $(this).index();
  //     bigimage.data('owl.carousel').to(number, 300, true);
  //   });
  // });


  return (
    <main>
      <section className="container">
        {makeup.map((item) => (item.id === id
          ? (
            <div key={item.id}>
              {/* <div className="outer">
                <div className="owl-stage-outer">
                  <OwlCarousel
                    id="big"
                    className="owl-carousel owl-theme"
                  >
                    {item.img.map((image) => <div key={image} className="item active"><img src={image} alt="test" className="img-owl-carousel" /></div>)}
                  </OwlCarousel>
                </div>
                <OwlCarousel
                  id="thumbs"
                  className="owl-carousel owl-theme"
                >
                  {item.img.map((image) => <div key={image} className="item"><img src={image} alt="test" className="img-owl-carousel" /></div>)}
                </OwlCarousel>
              </div> */}

              <div><img src={item.img[0]} alt={item.id} /></div>
              <h2>{item.brand}</h2>
              <h3>{item.name}</h3>
              <p>
                {item.price}
                {' '}
                €
              </p>
              <button type="button" className="waves-effect waves-light btn light-green lighten-1">Add to bag</button>
              <h4>Description</h4>
              <p>{item.description}</p>
            </div>
          )
          : ''))}
      </section>
    </main>
  );
};

ProductDetails.propTypes = {
  id: PropTypes.string.isRequired,
};


export default ProductDetails;
