import React from 'react';
import './ShoppingCartPage.scss';
import PropTypes from 'prop-types';


const ShoppingCartPage = ({ bag }) => {
  const checkOut = () => {
    alert('CHECK OUT');
  };

  if (bag.length === 0) {
    return (
      <main>
        <section className="container">
          <h1>Your bag</h1>
          <p>Nothing in cart.</p>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="container">
        <h1>Your bag</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {bag.map((item) => (
              <tr key={item.id}>
                {/* {JSON.stringify(item)} */}
                <td>
                  {item.brand}
                  {' '}
                  -
                  {' '}
                  {item.name}
                </td>
                <td>1</td>
                <td>
                  {item.price}
                  {' '}
                  €
                </td>
                <td>
                  <i className="material-icons red-text ">clear</i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>Total: </h3>
        <button type="button" className="waves-effect waves-light btn light-green lighten-1" onClick={() => checkOut()}>Check out</button>
      </section>
    </main>
  );
};

ShoppingCartPage.propTypes = {
  bag: PropTypes.array.isRequired,
};

export default ShoppingCartPage;
