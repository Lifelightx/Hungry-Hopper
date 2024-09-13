import React from 'react';
import FoodItem from './FoodItem';

function FoodDisplay({ foods }) {
  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {foods.map(food => (
        <FoodItem 
          key={food._id} 
          id={food._id}
          name={food.name}
          price={food.price}
          description={food.description}
          image={food.image}
        />
      ))}
    </div>
  );
}

export default FoodDisplay;
