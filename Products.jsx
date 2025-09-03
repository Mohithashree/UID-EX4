
import { products } from './data';

function Products({ cart, setCart }) {
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="products-container">
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>All Products</h2>
      <div className="product-list grid-layout">
        {products.map(product => (
          <div key={product.id} className="product-card enhanced-card">
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="desc">{product.description}</p>
              <p className="price">${product.price.toFixed(2)}</p>
              <button className="add-cart-btn" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
