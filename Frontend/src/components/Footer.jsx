import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

function Footer() {
  return (
    <footer className="bg-gray-100 text-neutral-content p-6 md:p-10 mt-7">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
        <nav>
          <img src={assets.logo} className='h-[60px] md:h-[80px]' alt="Logo" />
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            <b><i>"Savor the Flavor, Delivered to Your Doorstep" </i> </b>
          </p>
        </nav>
        <nav>
          <h6 className="text-lg font-bold mb-2">Services</h6>
          <Link className="block text-gray-700 hover:underline hover:text-orange-500 text-sm md:text-base mb-1">Branding</Link>
          <Link className="block text-gray-700 hover:underline hover:text-orange-500 text-sm md:text-base mb-1">Design</Link>
          <Link className="block text-gray-700 hover:underline hover:text-orange-500 text-sm md:text-base mb-1">Marketing</Link>
          <Link className="block text-gray-700 hover:underline hover:text-orange-500 text-sm md:text-base">Advertisement</Link>
        </nav>
        <nav>
          <h6 className="text-lg font-bold mb-2">Company</h6>
          <Link className="block text-gray-700 hover:underline hover:text-orange-500 text-sm md:text-base mb-1">About us</Link>
          <Link className="block text-gray-700 hover:underline hover:text-orange-500 text-sm md:text-base mb-1">Contact</Link>
          <Link className="block text-gray-700 hover:underline hover:text-orange-500 text-sm md:text-base mb-1">Jobs</Link>
          <Link className="block text-gray-700 hover:underline hover:text-orange-500 text-sm md:text-base">Press kit</Link>
        </nav>
        <nav>
          <h6 className="text-lg font-bold mb-2">Legal</h6>
          <Link to='https://daisyui.com/components/footer/' className="block text-gray-700 hover:underline hover:text-orange-500 text-sm md:text-base mb-1">Terms of use</Link>
          <Link className="block text-gray-700 hover:underline hover:text-orange-500 text-sm md:text-base mb-1">Privacy policy</Link>
          <Link className="block text-gray-700 hover:underline hover:text-orange-500 text-sm md:text-base">Cookie policy</Link>
        </nav>
      </div>
      <div className="text-center mt-6">
    <p className="text-sm text-gray-700">© {new Date().getFullYear()} <Link
    className='text-orange-500'
     to='https://lifelightx.github.io/portfolio/'
    >Jeebanjyoti</Link> . All rights reserved.</p>
  </div>
    </footer>
  );
}

export default Footer;
