import React, { useState } from 'react';

const AddProduct = () => {
  // State to store product details
  const [product, setProduct] = useState({
    productName: '',
    description: '',
    price: '',
    
  });

  // Function to handle form submission
  const handleAddProduct = async (event) => {
    event.preventDefault();

    try {
      // Make a POST request to the Flask backend API
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        console.log('Product added successfully!');
              } else {
        console.error('Failed to add product:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding product:', error.message);
    }
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleAddProduct}>
        {/* Product Name */}
        <label>
          Product Name:
          <input
            type="text"
            value={product.productName}
            onChange={(e) => setProduct({ ...product, productName: e.target.value })}
            required
          />
        </label>

        {/* Description */}
        <label>
          Description:
          <textarea
            value={product.description}
            onChange={(e) => setProduct({ ...product, description: e.target.value })}
            required
          />
        </label>

        {/* Price */}
        <label>
          Price:
          <input
            type="text"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            required
          />
        </label>

    

        {/* Submit button */}
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
