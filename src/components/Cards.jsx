import React from 'react';
import Products from './Products';
import ProductCard from './ProductCard';

function Cards() {
  return (
    <div>
      {Products().map((item) => (
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
