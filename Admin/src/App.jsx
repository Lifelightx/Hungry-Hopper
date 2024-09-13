import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Add from './Pages/Add';
import Orders from './Pages/Orders';
import List from './Pages/List';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const url = 'http://localhost:5000'
  return (
    <div className="flex">
      <ToastContainer />

      {/* Navbar */}
      <Navbar />

      {/* Main content wrapper */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <div className="flex-grow mt-20 p-4">
          <Routes>
            <Route path='/add' element={<Add url={url} />} />
            <Route path='/list' element={<List url={url} />} />
            <Route path='/orders' element={<Orders url={url} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
