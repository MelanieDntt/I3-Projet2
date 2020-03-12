import React, { useState } from 'react';
import './ShoppingCartPage.scss';
import PropTypes from 'prop-types';


const ShoppingCartPage = ({ oldBag, deleteFromBag }) => {
  const [bag, setBag] = useState(oldBag);
  const [total, setTotal] = useState(oldBag.reduce((acc, res) => acc + res.price, 0));
  const quantity = 1;

  console.log(`au lancement, le total est de ${total}`);

  console.log(total);

  const checkOut = () => {
    alert(`CHECK OUT. TOTAL : ${total}`);
  };

  const deleteItem = (item) => {
    for (let i = 0; i < bag.length; i++) {
      if (item.id === bag[i].id) {
        setBag(bag.filter((product) => product.id !== item.id));
      }
    }
    setTotal(total - item.price);
    console.log(total);

    console.log(bag);
    alert('DELETED');
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
                  <br />
                  {item.name}
                </td>
                <td>{quantity}</td>
                <td>
                  {item.price}
                  {' '}
                  €
                </td>
                <td>
                  <button type="button" onClick={() => { deleteItem(item); deleteFromBag(item); }} className="z-depth-0 transparent btn-flat"><i className="material-icons red-text accent-4-text">clear</i></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 className="total">
          Total:
          {' '}
          {total.toFixed(2)}
          {' '}
          €
        </h3>
        <button type="button" className="waves-effect waves-light btn light-green lighten-1" onClick={() => checkOut()}>Check out</button>
      </section>
    </main>
  );
};

ShoppingCartPage.propTypes = {
  oldBag: PropTypes.array.isRequired,
  deleteFromBag: PropTypes.func.isRequired,
};

export default ShoppingCartPage;
