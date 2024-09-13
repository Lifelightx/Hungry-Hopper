import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function Orders({url}) {
  const [orders, setOrder] = useState([]);

  const listOrders = async () => {
    const response = await axios.get(url + '/api/order/list');
    if (response.data.success) {
      setOrder(response.data.data);
    } else {
      toast.error('Error getting order list');
    }
  };
 
  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url+'/api/order/status',{
      orderId,
      status:event.target.value
    })
    if (response.data.success) {
      await listOrders()
    }
  }

  useEffect(() => {
    listOrders();
  }, []);

  return (
    <div className="py-10 px-4">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Orders</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 md:p-6 border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Order ID: {order._id}</h4>
              <div className="mb-4">
                <p className="text-gray-600">
                  <b>Details:</b>{' '}
                  {order.items.map((item, index) =>
                    index === order.items.length - 1
                      ? `${item.name} x ${item.quantity}`
                      : `${item.name} x ${item.quantity}, `
                  )}
                </p>
                <p className="text-gray-600">
                  <b>Name:</b> {order.address.firstName} {order.address.lastName}
                </p>
                <p className="text-gray-600">
                  <b>Address:</b> {`${order.address.street}, ${order.address.city}, ${order.address.state}, ${order.address.postalCode}, ${order.address.phone}`}
                </p>
                <p className="text-gray-800 font-semibold mt-2">
                  <b>Amount:</b> ₹ {order.amount}.00
                </p>
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="status" className="text-gray-700 font-semibold">Status:</label>
                <select
                  id="status"
                  onChange={(event) => statusHandler(event, order._id)}
                  value={order.status}
                  className="block w-1/2 bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="Food Processing">Food Processing</option>
                  <option value="Out for Delivery">Out for Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;
