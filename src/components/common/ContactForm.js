import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send data to the server
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label='Name'
        name='name'
        onChange={handleChange}
        value={formData.name}
        variant='outlined'
        color="secondary"
        margin="normal"
      />
      <TextField
        fullWidth
        label='Email'
        name='email'
        onChange={handleChange}
        value={formData.email}
        variant='outlined'
        color="secondary"
        margin="normal"
      />
      <TextField
        fullWidth
        label='Message'
        multiline
        name='message'
        onChange={handleChange}
        rows={3}
        value={formData.message}
        variant='outlined'
        color="secondary"
        margin="normal"
      />
      <Button color='secondary' type='submit' variant='contained'>
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
