import React, { useState, useEffect } from 'react';

const EditProduct = () => {
  // state to store edited product details
  const [editedProduct, setEditedProduct] = useState({
    productName: '',
    description: '',
    price: '',
    farmer: '',
  });

  // function to handle form submission
  const handleEditProduct = async (event) => {
    event.preventDefault();

    try {
      // request to Flask server to update the product details
      const response = await fetch(//i need to input api here// , {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedProduct),
      });

      if (response.ok) {
        console.log('Product updated successfully!');
    
      } else {
        console.error('Failed to update product:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating product:', error.message);
    }
  };

   useEffect to fetch existing product details
  useEffect(() => {
    // I need to input API endpoint to fetch product details here
    const fetchProductDetails = async () => {
      try {
        const response = await fetch('your-api-endpoint-for-fetching-product-details');
        if (response.ok) {
          const existingProductDetails = await response.json();
          setEditedProduct(existingProductDetails);
        } else {
          console.error('Failed to fetch product details:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching product details:', error.message);
      }
    };

    // Call the fetch function
    fetchProductDetails();
  }, []);

  return (
    <div>
      <h3>Edit Product</h3>
      <form onSubmit={handleEditProduct}>
        <label>
          Product Name:
          <input
            type="text"
            value={editedProduct.productName}
            onChange={(e) =>
              setEditedProduct({
                ...editedProduct,
                productName: e.target.value,
              })
            }
          />
        </label>
        <label>
          Description:
          <textarea
            value={editedProduct.description}
            onChange={(e) =>
              setEditedProduct({
                ...editedProduct,
                description: e.target.value,
              })
            }
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            value={editedProduct.price}
            onChange={(e) =>
              setEditedProduct({
                ...editedProduct,
                price: e.target.value,
              })
            }
          />
        </label>
                <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProduct;
