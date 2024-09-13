import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-white">
      <div className="sticky top-0 flex flex-col w-14 md:w-64 bg-white h-screen text-gray-600 transition-all duration-300 md:border-r border-gray-400 z-10 sidebar">
        <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
          <ul className="flex flex-col py-24 mx-4 space-y-1">
            {/* Add Items */}
            <li>
              <Link 
                to="/add" 
                className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 hover:text-orange-600 md:border-gray-500 md:border-[1px] rounded-sm"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <i className="fas fa-add"></i>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate hidden md:block">
                  Add Items
                </span>
              </Link>
            </li>

            {/* List Items */}
            <li>
              <Link 
                to="/list" 
                className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 hover:text-orange-600 md:border-gray-500 md:border-[1px] rounded-sm"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <i className="fas fa-clipboard-list"></i>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate hidden md:block">
                  List Items
                </span>
              </Link>
            </li>

            {/* Orders */}
            <li>
              <Link 
                to="/orders" 
                className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 hover:text-orange-600 md:border-gray-500 md:border-[1px] rounded-sm"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <i className="fas fa-archive"></i>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate hidden md:block">
                  Orders
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
