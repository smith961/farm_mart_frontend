
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signup } from './Actions';

const Signup = ({ signup }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch signup action
    signup(formData);
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

// Connect the component to Redux
const mapDispatchToProps = (dispatch) => {
  return {
    signup: (userData) => dispatch(signup(userData)),
  };
};

export default connect(null, mapDispatchToProps)(Signup);
