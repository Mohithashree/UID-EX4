import React from 'react';

function Cart({ cart, setCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <img src={item.image} alt={item.name} style={{ width: 50, height: 50, borderRadius: 6, marginRight: 12 }} />
                <span style={{ flex: 1 }}>{item.name} - ${item.price.toFixed(2)}</span>
                <button style={{ marginLeft: 8, background: '#ff4d4f', color: '#fff', border: 'none', borderRadius: 4, padding: '0.3rem 0.7rem', cursor: 'pointer' }} onClick={() => handleRemove(idx)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p>Total: ${total.toFixed(2)}</p>
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
