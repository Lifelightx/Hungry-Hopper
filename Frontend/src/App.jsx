import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Layout from './Layout'
import About from './pages/About'
import LogIn from './components/LogIn'
import Services from './pages/Services'
import Cart from './pages/Cart'
import Order from './pages/Order'
import ProtectedRoute from './ProtectedRoute'
import Verify from './pages/Verify'
import Myorders from './pages/Myorders'
function App() {
  const [showLogin, setShowLogin] = useState(false)
  const handleLogin = () => {
    setShowLogin(true)
  }
  return (
    <div>

      <ToastContainer/>
      {showLogin && <LogIn onClose={() => setShowLogin(false)} />}
      <Router>
        <Routes>
          <Route path='/' element={<Layout onloginClick={handleLogin} />}>
            
            <Route path='' element={<Home />} />
            <Route path='/menu' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/verify' element={<Verify />} />
            <Route path='/myorders' element={<Myorders />} />
            <Route path='/cart' element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            } />
            <Route path='/order' element={
              <ProtectedRoute>
                <Order />
              </ProtectedRoute>
            } />
            
          </Route>
        </Routes>
      </Router>

    </div>
  )
}

export default App
