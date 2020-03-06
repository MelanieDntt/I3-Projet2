import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import './HomePage.scss';

const HomePage = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const elem = document.querySelectorAll('.slider');
    M.Slider.init(elem, {});
  });

  return (
    <main>
      <section className="container home">

        <div className="slider">
          <ul className="slides">
            <li>
              <img src="/img/anastasia-beverly-hills.jpg" alt="test" />
            </li>
            <li>
              <img src="/img/coloupop.jpg" alt="test" />
            </li>
            <li>
              <img src="/img/tarte.jpg" alt="test" />
            </li>
            <li>
              <img src="/img/milani.jpg" alt="test" />
            </li>
          </ul>
        </div>

        <h3>Trending now</h3>
        <div className="slider">
          <ul className="slides">
            <li>
              <img src="/img/abh-amrezyplt.jpg" alt="test" />
            </li>
            <li>
              <img src="/img/ub-allnighterprimer.jpg" alt="test" />
            </li>
            <li>
              <img src="/img/beautyblender-wave.jpg" alt="test" />
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
