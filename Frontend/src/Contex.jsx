import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => { 
    const [cartItems, setCartItems] = useState({});
    const url = 'https://hungryhopperbackend.onrender.com'
    const [token, setToken] =  useState('');
    const [food_list, setFoodList] = useState([])



    const addToCart = async(itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1,
        }));
        if(token){
            await axios.post(url+'/api/cart/add',{itemId},
                {headers:{token}}
            )
        }
    };

    const removeFromCart = async(itemId) => {
        setCartItems((prev) => {
            const newCartItems = { ...prev };
            if (newCartItems[itemId] >1) {
                newCartItems[itemId] -= 1;
            } else {
                delete newCartItems[itemId];
            }
            return newCartItems;
        });
        if(token){
            await axios.post(url+'/api/cart/remove',{itemId},
                {headers:{token}}
            )
        }
    };
    const getTotalCartItems = ()=>{
        let totalQuantity = 0;
        for (let item in cartItems) {
            totalQuantity += cartItems[item];
        }
        return totalQuantity;
    }
    const getTotalCartAmount = ()=>{
        
        let totalAmount = 0;
        for(let item in cartItems){
            if(cartItems[item]>0){
                totalAmount += cartItems[item]*food_list.find(food=>food._id===item).price;

            }
        }
        return totalAmount;
    }

    const fetchFoodList = async ()=>{
        const response = await axios.get(url+'/api/food/list')
        setFoodList(response.data.data)
    }

    const loadCartData = async(token)=>{
        const response = await axios.post(url+'/api/cart/get',{},{headers:{token}})
        setCartItems(response.data.cartData)
    }

    useEffect(()=>{
        async function loadData() {
            await fetchFoodList();
            if(localStorage.getItem('token')){
                setToken(localStorage.getItem('token'))
                await loadCartData(localStorage.getItem('token'))
            }
        }
        loadData();
    },[])
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartItems,
        url,
        token,
        setToken,
    };

    

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children} 
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
