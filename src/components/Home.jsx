import { useState, useEffect } from 'react';
import ImageSlider from './ImageSlider';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const myName = "Text";
  const myMessage = "Hello Welcome 2026";

  return (
    <>
      <ImageSlider />

      <div className="container-fluid">
        <div className="container">
          <h1>Home Page new</h1>
          <h1>Lorem Dummy {myName}!</h1>
          <p>{myMessage}</p>
        </div>
      </div>

      <div className="container">
        <h1>Products</h1>
        <div className="row">
          {products.map(product => (
            <div key={product.id} className="col-md-3 mb-4">
              <div className="card h-100">
                <img 
                  src={product.image} 
                  className="card-img-top" 
                  alt={product.title} 
                  style={{height: '200px', objectFit: 'contain'}} 
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
