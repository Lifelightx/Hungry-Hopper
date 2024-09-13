import React, { useContext } from 'react';
import { StoreContext } from '../Contex';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Cart() {
  const navigate = useNavigate();
  const { cartItems, food_list, removeFromCart,getTotalCartAmount,url } = useContext(StoreContext);
  const deliveryfee = 30
  const handleOrderClick = ()=>{
    
    if(getTotalCartAmount()>0){
      navigate('/order')
    }
    else{
      toast.error('Select an Item First')
      navigate('/')
    }
  }

  return (
    <div className="overflow-x-auto w-full max-w-8xl mx-auto mt-16 px-4">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4">Items</th>
            <th className="py-2 px-4">Title</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">Quantity</th>
            <th className="py-2 px-4">Total</th>
            <th className="py-2 px-4">Remove</th>
          </tr>
        </thead>
        <tbody>
          {food_list.map((val, ind) => {
            if (cartItems[val._id] > 0) {
              return (
                <tr key={ind} className="border-t">
                  <td className="py-2 px-4 flex justify-center">
                    <img src={url+'/image/'+val.image} alt={val.food_name} className="w-16 h-16 md:w-20 md:h-20 object-cover rounded" />
                  </td>
                  <td className="py-2 px-4 text-center">{val.name}</td>
                  <td className="py-2 px-4 text-center">₹{val.price}</td>
                  <td className="py-2 px-4 text-center">{cartItems[val._id]}</td>
                  <td className="py-2 px-4 text-center">₹{val.price * cartItems[val._id]}</td>
                  <td className="py-2 px-4 text-center text-red-500">
                    <button onClick={() => removeFromCart(val._id)} className="hover:text-red-700"><i class="material-icons">delete</i></button>
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>

      <hr className="h-4 my-4" />
      
      <div className="border p-4 max-w-xl mx-auto bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold">Cart totals</h2>
        <hr />
        <div className="flex justify-between my-3">
          <p>SubTotal</p>
          <p>₹ {getTotalCartAmount()}</p>
        </div>
        <hr />
        <div className="flex justify-between my-2">
          <p>Delivery Fee</p>
          <p>₹ {deliveryfee}</p>
        </div>
        <hr />
        <div className="flex justify-between my-4">
          <b>Total: </b>
          <b>₹ { getTotalCartAmount()? getTotalCartAmount()+ deliveryfee : 0}</b>
        </div>
        <div className="flex justify-end">
          <button onClick={handleOrderClick} className="bg-orange-400 px-8 md:px-16 py-2 mt-2 rounded-sm text-xl text-white"><b>PROCEED</b></button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
