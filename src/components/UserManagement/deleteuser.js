import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const DeleteUser = ({ userId, onDelete }) => {
  const history = useHistory();

  const handleDeleteUser = async () => {
    try {
      const response = await fetch(`your-api-endpoint-for-deleting-user/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        onDelete(userId);
        // Redirect to the home page
        history.push('/');
        alert('User deleted successfully!');
      } else {
        alert('Failed to delete user. Please try again.');
      }
    } catch (error) {
      console.error('Error deleting user:', error.message);
    }
  };

  return (
    <div>
      <h3>Delete User</h3>
      <button onClick={handleDeleteUser}>Delete User</button>
    </div>
  );
};

export default DeleteUser;
