import React from 'react';

import { products } from './data';

function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to ShopNow</h1>
        <p>Discover the best tech gadgets at unbeatable prices!</p>
        <button className="shop-btn" onClick={() => window.location.href = '/products'}>Shop Now</button>
      </section>
      <section className="featured">
        <h2>Featured Products</h2>
        <div className="product-list">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
