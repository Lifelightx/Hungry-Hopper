import React from 'react';
import { assets } from '../assets/assets';

function Navbar() {
  return (
    <div className='fixed top-0 left-0 w-full bg-white shadow-md z-20'>
      <div className='flex justify-between px-4 py-1 mx-2 items-center'>
        <div className='flex flex-col justify-center items-center'>
          <img className='h-[55px]' src={assets.logo} alt="Logo" />
          <p className='text-gray-700 font-outfit text-center text-sm'>Admin Panel</p>
        </div>
        <img className='h-8' src={assets.profile_image} alt="Profile" />
      </div>
    </div>
  );
}

export default Navbar;
