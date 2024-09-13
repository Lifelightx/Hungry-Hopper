import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'

import { StoreContext } from '../Contex'
function FoodItem({ id, name, price, description, image }) {


    const {cartItems, addToCart, removeFromCart,url} = useContext(StoreContext)


    
    return (
        <div className='h-auto w-[250px]'>
            <div className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition">
                <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
                    <img
                        className="absolute top-0 left-0 object-cover w-full h-full group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                        src={url+'/image/'+image}
                        alt="Card Image"
                    />
                    <div className="absolute bottom-2 right-2 flex items-center space-x-2 bg-white p-1 rounded-full shadow-md ">
                        {!cartItems[id] ? (
                            <img
                                onClick={()=>addToCart(id)}
                                src={assets.add_icon_white}
                                alt="Add"
                                className="cursor-pointer h-[25px]"
                            />
                        ) : (
                            <div className="flex items-center space-x-2">
                                <img
                                    onClick={()=>removeFromCart(id)}
                                    src={assets.remove_icon_red}
                                    alt="Remove"
                                    className="cursor-pointer h-[25px]"
                                />
                                <p className="text-gray-800 font-light">{cartItems[id]}</p>
                                <img
                                    onClick={()=>addToCart(id)}
                                    src={assets.add_icon_green}
                                    alt="Add"
                                    className="cursor-pointer h-[25px]"
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className="p-4 md:p-5">
                    <div>
                        <h3 className="text-lg font-bold text-gray-800">
                            {name}
                        </h3>
                       
                    </div>
                    <div>
                        <p className="mt-2 text-gray-500 h-[5.75rem] text-sm">
                            {description}
                        </p>
                        <p className='text-orange-500 font-semibold'> ₹{price}.00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodItem
