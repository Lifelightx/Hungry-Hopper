import React from 'react';
import { menu_list } from '../assets/assets';

function Exploremenu({ category, setCategory }) {
  return (
    <div className='mt-4 p-4 mx-auto w-[90vw]'>
      <h1 className='text-3xl font-bold mb-2'>Explore Our Menu</h1>
      <p className='mb-4'>
        Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>
      <div className='flex flex-wrap justify-around'>
        {menu_list.map((val, index) => (
          <div
            onClick={() =>
              setCategory(prev => (prev === val.menu_name ? 'All' : val.menu_name))
            }
            key={index}
            className='flex flex-col items-center justify-center cursor-pointer p-2'
          >
            <img
              className={`h-[110px] object-cover ${category === val.menu_name ? 'border-4 border-orange-600' : 'border-4 border-transparent'} rounded-[50%] p-1`}
              src={val.menu_image}
              alt={val.menu_name}
            />
            <p className='text-center mt-2'>{val.menu_name}</p>
          </div>
        ))}
      </div>
      <hr className='my-4' />
    </div>
  );
}

export default Exploremenu;
