import React, { useState, useEffect } from 'react';

const EditUser = () => {
  // State to store edited user details
  const [editedUser, setEditedUser] = useState({
    name: '',
    email: '',
  });

  // Function to handle form submission
  const handleEditUser = async (event) => {
    event.preventDefault();
    try {
      // request from Flask server to update the user details
      const response = await fetch(//NEED TO INPUT API HERE', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedUser),
      });

      if (response.ok) {
        console.log('User details updated successfully!');
      } else {
        console.error('Failed to update user details:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating user details:', error.message);
    }
  };

  useEffect(() => {
    // I need to input ApI here
    const fetchUserDetails = async () => {
      try {
        const response = await fetch('your-api-endpoint-for-fetching-user-details');
        if (response.ok) {
          const existingUserDetails = await response.json();
          setEditedUser(existingUserDetails);
        } else {
          console.error('Failed to fetch user details:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching user details:', error.message);
      }
    };

    // Call the fetch function
    fetchUserDetails();
  }, []);

  return (
    <div>
      <h3>Edit User</h3>
      <form onSubmit={handleEditUser}>
        <label>
          Name:
          <input
            type="text"
            value={editedUser.name}
            onChange={(e) =>
              setEditedUser({
                ...editedUser,
                name: e.target.value,
              })
            }
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={editedUser.email}
            onChange={(e) =>
              setEditedUser({
                ...editedUser,
                email: e.target.value,
              })
            }
          />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditUser;
