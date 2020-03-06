import React from 'react';
import { useRoutes, A } from 'hookrouter';
import './App.scss';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types';
import HomePage from './pages/home/HomePage';
import BrandsPage from './pages/brands/BrandsPage';
import NotFoundPage from './pages/NotFoundPage';
import FoundationPage from './pages/foundation/FoundationPage';
import ConcealerPage from './pages/concealer/ConcealerPage';
import BronzerPage from './pages/bronzer/BronzerPage';
import BlushPage from './pages/blush/BlushPage';
import HighlighterPage from './pages/highlighter/HighlighterPage';
import SettingPowderPage from './pages/settingpowder/SettingPowderPage';
import PrimerPage from './pages/primer/PrimerPage';
import SettingSprayPage from './pages/settingspray/SettingSprayPage';
import EyeshadowPalettePage from './pages/eyeshadowpalette/EyeshadowPalette';
import BrowsPage from './pages/brows/BrowsPage';
import EyelinerPage from './pages/eyeliner/EyelinerPage';
import MascaraPage from './pages/mascara/MascaraPage';
import AccessoriesPage from './pages/accessories/AccessoriesPage';
import LipsPage from './pages/lips/LipsPages';
import ProductDetails from './pages/product_details/ProductDetails';


const routes = {
  '/': () => <HomePage />,
  '/brands': () => <BrandsPage />,
  '/foundation': () => <FoundationPage />,
  '/concealer': () => <ConcealerPage />,
  '/bronzer': () => <BronzerPage />,
  '/blush': () => <BlushPage />,
  '/highlighter': () => <HighlighterPage />,
  '/setting_powder': () => <SettingPowderPage />,
  '/primer': () => <PrimerPage />,
  '/setting_spray': () => <SettingSprayPage />,
  '/eyeshadow_palette': () => <EyeshadowPalettePage />,
  '/brows': () => <BrowsPage />,
  '/eyeliner': () => <EyelinerPage />,
  '/mascara': () => <MascaraPage />,
  '/lips': () => <LipsPage />,
  '/accessories': () => <AccessoriesPage />,
  '/foundation/:id': ({ id }) => <ProductDetails id={id} />,
  '/concealer/:id': ({ id }) => <ProductDetails id={id} />,
  '/bronzer/:id': ({ id }) => <ProductDetails id={id} />,
  '/blush/:id': ({ id }) => <ProductDetails id={id} />,
  '/highlighter/:id': ({ id }) => <ProductDetails id={id} />,
  '/setting_powder/:id': ({ id }) => <ProductDetails id={id} />,
  '/primer/:id': ({ id }) => <ProductDetails id={id} />,
  '/setting_spray/:id': ({ id }) => <ProductDetails id={id} />,
  '/eyeshadow_palette/:id': ({ id }) => <ProductDetails id={id} />,
  '/brows/:id': ({ id }) => <ProductDetails id={id} />,
  '/eyeliner/:id': ({ id }) => <ProductDetails id={id} />,
  '/mascara/:id': ({ id }) => <ProductDetails id={id} />,
  '/lips/:id': ({ id }) => <ProductDetails id={id} />,
  '/accessories/:id': ({ id }) => <ProductDetails id={id} />,
};

routes.propTypes = {
  id: PropTypes.string.isRequired,
};

function App() {
  const routeResult = useRoutes(routes);

  document.addEventListener('DOMContentLoaded', () => {
    const sidenav = document.querySelector('#side-nav');
    M.Sidenav.init(sidenav, {});
  });

  document.addEventListener('DOMContentLoaded', () => {
    const elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems, {});
  });


  return (
    <>
      <div>
        <a href="#" data-target="side-nav" className="sidenav-trigger white show-on-large">
          <nav className="transparent z-depth-0">
            <i className="large material-icons red-text">menu</i>
          </nav>
        </a>

        <ul className="sidenav" id="side-nav">
          <li className="sidenav-close navbar-fixed">
            <i className="material-icons red-text closenav">close</i>
          </li>
          <li>
            <A href="/" className="sidenav-close">Home</A>
          </li>
          <li>
            <A href="/brands" className="sidenav-close">Brands</A>
          </li>
          <li>
            <ul className="collapsible">
              <li>
                <div className="collapsible-header">
                  Makeup
                </div>
                <div className="collapsible-body">
                  <ul>
                    <li>
                      <ul className="collapsible">
                        <li>
                          <div className="collapsible-header">
                            Face
                          </div>
                          <div className="collapsible-body">
                            <ul>
                              <li><A href="/foundation" className="sidenav-close">Foundation</A></li>
                              <li><A href="/concealer" className="sidenav-close">Concealer</A></li>
                              <li><A href="/bronzer" className="sidenav-close">Bronzer</A></li>
                              <li><A href="/blush" className="sidenav-close">Blush</A></li>
                              <li><A href="/highlighter" className="sidenav-close">Highlighter</A></li>
                              <li><A href="/setting_powder" className="sidenav-close">Setting powder</A></li>
                              <li><A href="/primer" className="sidenav-close">Primer</A></li>
                              <li><A href="/setting_spray" className="sidenav-close">Setting spray</A></li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul className="collapsible">
                        <li>
                          <div className="collapsible-header">
                            Eyes
                          </div>
                          <div className="collapsible-body">
                            <ul>
                              <li><A href="/eyeshadow_palette" className="sidenav-close">Eyeshadow palette</A></li>
                              <li><A href="/brows" className="sidenav-close">Brows</A></li>
                              <li><A href="/eyeliner" className="sidenav-close">Eyeliner</A></li>
                              <li><A href="/mascara" className="sidenav-close">Mascara</A></li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li><A href="/lips" className="sidenav-close">Lips</A></li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <A href="/accessories" className="sidenav-close">Accessories</A>
          </li>
        </ul>
      </div>

      {routeResult || <NotFoundPage />}

      <footer>
        <p>&copy; I3 Projet 2 - Mélanie Denotte WEB8</p>
      </footer>
    </>
  );
}

export default App;
