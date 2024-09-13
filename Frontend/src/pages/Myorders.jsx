import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../Contex';
import axios from 'axios';

function Myorders() {
  const [data, setData] = useState([]);
  const { url, token } = useContext(StoreContext);

  const fetchOrders = async () => {
    const response = await axios.post(url + '/api/order/userorders', {}, { headers: { token } });
    setData(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className=" bg-gray-100 py-10 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">My Orders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((order, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 border border-gray-200 transition hover:shadow-lg"
            >
              <div className="mb-4">
                <p className="text-gray-500 text-sm">Order ID: <span className="font-semibold">{order._id}</span></p>
                <p className="text-gray-500 text-sm">Order Date: <span className="font-semibold">{new Date(order.date).toLocaleString()}</span></p>
                <p className="text-gray-500 text-sm">Status: <span className={`font-semibold ${order.status === 'Completed' ? 'text-green-600' : 'text-orange-600'}`}>{order.status}</span></p>
                <p className="text-lg font-semibold mt-2">Total: ₹ {order.amount}</p>
              </div>
              <div>
                <p className="text-lg font-medium mb-2">Items:</p>
                <div className="space-y-4">
                  {order.items.map((item, index2) => (
                    <div key={index2} className="flex items-center gap-4">
                      <img
                        src={`${url}/image/${item.image}`}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg border border-gray-200"
                      />
                      <div className="flex-1">
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-gray-600">Quantity: {item.quantity}</p>
                        <p className="text-gray-600">Price: ₹ {item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button onClick={fetchOrders} className='btn bg-orange-400 mt-4 hover:bg-orange-600 px-3 py-1 rounded-md'>Check Status</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Myorders;
