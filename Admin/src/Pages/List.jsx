import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function List({url}) {
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    axios.get(`${url}/api/food/list`)
      .then((res) => {
        setFoodData(res.data.data);
      })
      .catch(err => toast.error('Error fetching data'));
  }, []);

  const handleDelete = async (foodId) => {
    axios.post(`${url}/api/food/remove`, { id: foodId })
      .then(() => {
        axios.get(`${url}/api/food/list`)
          .then((res) => {
            setFoodData(res.data.data);
            toast.success('Item Removed Successfully');
          })
          .catch(err => toast.error('Error removing item'));
      });
  }

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 bg-white">
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border px-2 md:px-4 py-2">Image</th>
              <th className="border px-2 md:px-4 py-2">Name</th>
              <th className="border px-2 md:px-4 py-2">Category</th>
              <th className="border px-2 md:px-4 py-2">Description</th>
              <th className="border px-2 md:px-4 py-2">Price</th>
              <th className="border px-2 md:px-4 py-2">Cancel</th>
            </tr>
          </thead>
          <tbody>
            {foodData.length > 0 ? (
              foodData.map((val) => (
                <tr key={val._id}>
                  <td className="border px-2 md:px-4 py-2">
                    <img src={`${url}/image/${val.image}`} alt={val.name} className="w-16 h-16 object-cover rounded-xl" />
                  </td>
                  <td className="border px-2 md:px-4 py-2">{val.name}</td>
                  <td className="border px-2 md:px-4 py-2">{val.category}</td>
                  <td className="border px-2 md:px-4 py-2">{val.description}</td>
                  <td className="border px-2 md:px-4 py-2"><b>{val.price}</b></td>
                  <td className="border px-2 md:px-4 py-2">
                    <button 
                      className="text-red-600 rounded-lg" 
                      onClick={() => handleDelete(val._id)}
                    >
                      <i class="material-icons">delete</i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default List;
