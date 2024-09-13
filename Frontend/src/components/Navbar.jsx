import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../Contex';


function Navbar({ onloginClick }) {
  const {cartItems} = useContext(StoreContext);
  const { token, setToken,getTotalCartItems } = useContext(StoreContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navigate = useNavigate()
  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('token');
    navigate('/', { replace: true }); // Replace current URL with /login, without adding it to the browser's history.
    
    // Assuming this will clear the token and trigger a re-render
  };
  useEffect(()=>{
    console.log(cartItems);
  },[])


  return (
    <div className="flex sticky top-0 z-10 bg-white shadow-md flex-row items-center justify-between px-4">
      <div className="logo">
        <Link to='/'>
          <img src={assets.logo} alt="Logo" className="h-10" style={{ height: '70px' }} />
        </Link>
      </div>

      {/* Menu items for larger screens */}
      <div className="hidden md:flex space-x-4">
        <Link to="/" className="hover:text-orange-500">Home</Link>
        {token?
        <Link to="/myorders" className="hover:text-orange-500">My Orders</Link>:''}
        <Link to="/contact" className="hover:text-orange-500">Contact us</Link>
        <Link to="/about" className="hover:text-orange-500">About us</Link>
      </div>

      {/* Mobile cart and hamburger icon */}
      <div className="md:hidden flex items-center space-x-4">
        {!token?'':<Link to="/cart">
          <div className="relative">
            {getTotalCartItems() > 0 && (
              <p className="absolute top-0 left-4 flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
               {Object.keys(cartItems).length}
              </p>
            )}
            🛒
          </div>
        </Link>}
        <button
          onClick={toggleMenu}
          className="text-orange-700 hover:text-orange-500 focus:outline-none"
        >
          {isMenuOpen ? '×' : '☰'}
        </button>
      </div>

      {/* Cart and Sign In/Sign Out button for larger screens */}
      <div className="hidden md:flex flex-row items-center justify-around gap-8">
        {!token?'':<Link to="/cart">
          <div className="relative">
            {getTotalCartItems() > 0 && (
              <p className="absolute top-0 left-3 flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                {Object.keys(cartItems).length}
              </p>
            )}
            🛒
          </div>
        </Link>}
        {!token ? (
          <button
            onClick={onloginClick}
            type="button"
            className="text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-2xl text-sm px-6 py-1.5 text-center dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:bg-orange-600 dark:focus:ring-orange-900"
          >
            Sign In
          </button>
        ) : (
          <button
            onClick={handleLogout}
            type="button"
            className="text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-2xl text-sm px-6 py-1.5 text-center dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:bg-orange-600 dark:focus:ring-orange-900"
          >
            Sign Out
          </button>
        )}
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link to="/" className="hover:text-orange-500">Home</Link>
           {token?
            <Link to="/myorders" className="hover:text-orange-500">My Orders</Link>:''}
            <Link to="/contact" className="hover:text-orange-500">Contact us</Link>
            <Link to="/about" className="hover:text-orange-500">About us</Link>
            {!token ? (
              <button
                onClick={onloginClick}
                type="button"
                className="text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-2xl text-sm px-6 py-1.5 text-center dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:bg-orange-600 dark:focus:ring-orange-900"
              >
                Sign In
              </button>
            ) : (
              <button
                onClick={handleLogout}
                type="button"
                className="text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-2xl text-sm px-6 py-1.5 text-center dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:bg-orange-600 dark:focus:ring-orange-900"
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
