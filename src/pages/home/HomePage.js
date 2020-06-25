import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import './HomePage.scss';
import { A } from 'hookrouter';

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
              <A href="brands/Anastasia%20Beverly%20Hills"><img src="/img/anastasia-beverly-hills.jpg" alt="test" /></A>
            </li>
            <li>
              <A href="brands/ColourPop"><img src="/img/coloupop.jpg" alt="test" /></A>
            </li>
            <li>
              <A href="/concealer/tarte-shape-tape-concealer"><img src="/img/tarte.jpg" alt="test" /></A>
            </li>
            <li>
              <A href="/brands/Milani"><img src="/img/milani.jpg" alt="test" /></A>
            </li>
          </ul>
        </div>

        <h3>Trending now</h3>
        <div className="slider">
          <ul className="slides">
            <li>
              <A href="/eyeshadow_palette/anastasia-beverly-hills-amrezy-palette"><img src="/img/abh-amrezyplt.jpg" alt="test" /></A>
            </li>
            <li>
              <A href="/primer/urban-decay-all-nighter-primer"><img src="/img/ub-allnighterprimer.jpg" alt="test" /></A>
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
