import React, { useState } from 'react';
import { useRoutes, A } from 'hookrouter';
import './App.scss';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize';
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
import BrandItemPage from './pages/brand_items/BrandItemPage';
import ShoppingCartPage from './pages/shopping_cart/ShoppingCartPage';


function App() {
  const [bag, setBag] = useState([]);
  const addToBag = (item) => {
    setBag((old) => [...old, item]);
  };
  console.log('bag changed', bag);
  console.log(bag.length);

  const routes = {
    '/': () => <HomePage />,
    '/brands': () => <BrandsPage />,
    '/foundation': () => <FoundationPage addToBag={addToBag} />,
    '/concealer': () => <ConcealerPage addToBag={addToBag} />,
    '/bronzer': () => <BronzerPage addToBag={addToBag} />,
    '/blush': () => <BlushPage addToBag={addToBag} />,
    '/highlighter': () => <HighlighterPage addToBag={addToBag} />,
    '/setting_powder': () => <SettingPowderPage addToBag={addToBag} />,
    '/primer': () => <PrimerPage addToBag={addToBag} />,
    '/setting_spray': () => <SettingSprayPage addToBag={addToBag} />,
    '/eyeshadow_palette': () => <EyeshadowPalettePage addToBag={addToBag} />,
    '/brows': () => <BrowsPage addToBag={addToBag} />,
    '/eyeliner': () => <EyelinerPage addToBag={addToBag} />,
    '/mascara': () => <MascaraPage addToBag={addToBag} />,
    '/lips': () => <LipsPage addToBag={addToBag} />,
    '/accessories': () => <AccessoriesPage addToBag={addToBag} />,
    '/foundation/:id': ({ id }) => <ProductDetails id={id} addToBag={addToBag} />,
    '/concealer/:id': ({ id }) => <ProductDetails id={id} addToBag={addToBag} />,
    '/bronzer/:id': ({ id }) => <ProductDetails id={id} addToBag={addToBag} />,
    '/blush/:id': ({ id }) => <ProductDetails id={id} addToBag={addToBag} />,
    '/highlighter/:id': ({ id }) => <ProductDetails id={id} addToBag={addToBag} />,
    '/setting_powder/:id': ({ id }) => <ProductDetails id={id} addToBag={addToBag} />,
    '/primer/:id': ({ id }) => <ProductDetails id={id} addToBag={addToBag} />,
    '/setting_spray/:id': ({ id }) => <ProductDetails id={id} addToBag={addToBag} />,
    '/eyeshadow_palette/:id': ({ id }) => <ProductDetails id={id} addToBag={addToBag} />,
    '/brows/:id': ({ id }) => <ProductDetails id={id} addToBag={addToBag} />,
    '/eyeliner/:id': ({ id }) => <ProductDetails id={id} addToBag={addToBag} />,
    '/mascara/:id': ({ id }) => <ProductDetails id={id} addToBag={addToBag} />,
    '/lips/:id': ({ id }) => <ProductDetails id={id} addToBag={addToBag} />,
    '/accessories/:id': ({ id }) => <ProductDetails id={id} addToBag={addToBag} />,
    '/brands/:brand': ({ brand }) => <BrandItemPage brand={brand} addToBag={addToBag} />,
    '/brands/:brand/:id': ({ brand, id }) => <ProductDetails brand={brand} id={id} addToBag={addToBag} />,
    '/bag': () => <ShoppingCartPage bag={bag} />,
  };

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
      <header>
        <div>
          <a href="#" data-target="side-nav" className="sidenav-trigger white show-on-large">
            <nav className="transparent z-depth-0">
              <i className="large material-icons red-text">menu</i>
            </nav>
          </a>

          <div className="container">
            <A href="/bag">
              <i className="material-icons flex-right">shopping_cart</i>
              <span className="new badge red lighten-2 white-text" data-badge-caption="">{bag.length}</span>
            </A>
          </div>

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
      </header>

      {routeResult || <NotFoundPage />}

      <footer>
        <p>&copy; I3 Projet 2 - Mélanie Denotte WEB8</p>
      </footer>
    </>
  );
}

export default App;
