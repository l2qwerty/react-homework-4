import React from 'react';
import { products } from './products';
import ProductCard from './ProductCard';

function Cards() {
  return (
    <div>
      {products.map((item) => (
        <div key={item.id}>
          <ProductCard
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        </div>
      ))}
    </div>
  );
}

export default Cards;
