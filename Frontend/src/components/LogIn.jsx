import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../Contex';
import axios from 'axios'


function LogIn({ onClose }) {

  const {url, setToken} = useContext(StoreContext)
  const [isLogin, setIsLogin] = useState(true);
  const [data, setData] = useState({
    name:'',
    email:'',
    password:'',
  })
  const handleChange = (e) => {
    setData({...data,
      [e.target.name]: e.target.value
     })
  }
  const onLogin = async(e)=>{
    e.preventDefault()
    if(isLogin){
      axios.post(`${url}/api/user/login`,{
        email:data.email,
        password:data.password,
      })
      .then(res => {
        console.log(res.data)
        if(res.data.success){
          onClose()
          setToken(res.data.token)
          localStorage.setItem('token', res.data.token)
        }
        else{
          alert(res.data.message)
        }
      })
      .catch(err => console.log(err))

    }else{
      axios.post(`${url}/api/user/register`,{
        name:data.name,
        email:data.email,
        password:data.password,
      })
     .then(res => {
      console.log(res.data)
      if(res.data.success){
        onClose()
        setToken(res.data.token)
        localStorage.setItem('token', res.data.token)
       
      }
      else{
        alert(res.data.message)
      }
    })
     .catch(err => console.log(err))
    }
  }
  

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-20">
      <div className="bg-white rounded-lg p-8 w-full max-w-md relative mx-4 sm:mx-0">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
        >
          ✖
        </button>
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {isLogin ? 'Log In' : 'Sign Up'}
        </h2>
        <form onSubmit={onLogin}>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name:
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={data.name}
                onChange={handleChange}
                required 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email:
            </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={data.email}
              onChange={handleChange}
              required 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password:
            </label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={data.password}
              onChange={handleChange}
              required 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button 
            type="submit" 
            
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-4"
          >
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>
        <div className="text-center">
          <p className="text-gray-700">or</p>
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 mt-4"
          >
            {isLogin ? 'Sign Up' : 'Log In'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
