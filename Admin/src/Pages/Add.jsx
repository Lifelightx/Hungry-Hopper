import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify';

function Add({url}) {
  const [image, setImage] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: 'Salad',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('price', Number(formData.price));
    data.append('category', formData.category);
    data.append('image', image);

    axios.post(url + '/api/food/add', data).then((res) => {
      if (res.data.success) {
        setFormData({
          name: '',
          price: '',
          category: 'Salad',
          description: '',
        });
        setImage(false);
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    });
  };

  return (
    <div className="py-10 px-4">
      <div className=" w-[550px] sm:max-w-md md:max-w-2lg lg:max-w-xl mx-auto p-6 bg-white rounded-md shadow-md">
        <form onSubmit={handleSubmit}>
          {/* Image Upload */}
          <div className="mb-4">
            <p className="text-lg font-semibold">Upload Image</p>
            <label htmlFor="image" className="block cursor-pointer mt-2">
              <img
                src={image ? URL.createObjectURL(image) : "https://cdn3d.iconscout.com/3d/premium/thumb/upload-media-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--image-photo-picture-photograph-elements-pack-miscellaneous-illustrations-4528483.png?f=webp"}
                alt="Upload Area"
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover border-2 border-dashed rounded-full p-2 hover:bg-gray-50 mx-auto"
              />
            </label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              id="image"
              hidden
              required
            />
          </div>

          {/* Product Name */}
          <div className="mb-4">
            <p className="text-lg font-semibold">Product Name</p>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              id="name"
              placeholder="Type Here"
              className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Product Description */}
          <div className="mb-4">
            <p className="text-lg font-semibold">Add Product Description</p>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Write content here"
              className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
          </div>

          {/* Product Category */}
          <div className="mb-4">
            <p className="text-lg font-semibold">Product Category</p>
            <select
              value={formData.category}
              onChange={handleChange}
              name="category"
              className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desert">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          {/* Product Price */}
          <div className="mb-4">
            <p className="text-lg font-semibold">Product Price</p>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              id="price"
              placeholder="Type Here"
              className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-orange-500 text-white p-3 rounded-md hover:bg-orange-600 transition duration-300"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Add;
