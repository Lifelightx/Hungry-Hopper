import React, { useState, useContext } from 'react';
import Header from '../components/Header';
import Exploremenu from '../components/Exploremenu';
import FoodDisplay from '../components/FoodDisplay';
import { StoreContext } from '../Contex';
function Home() {
  const [category, setCategory] = useState('All');
  const { food_list } = useContext(StoreContext);
  
  const filteredFoods = category === 'All' ? food_list : food_list.filter(food => food.category === category);

  return (
    <div>
      <Header />
      <Exploremenu category={category} setCategory={setCategory} />
      <FoodDisplay foods={filteredFoods} />
    </div>
  );
}

export default Home;
