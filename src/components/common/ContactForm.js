import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

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
        color="secondary"
        margin="dense"
        size="small"
      />
      <TextField
        fullWidth
        label='Email'
        name='email'
        onChange={handleChange}
        value={formData.email}
        color="secondary"
        margin="dense"
        size="small"
      />
      <TextField
        fullWidth
        label='Message'
        multiline
        name='message'
        onChange={handleChange}
        rows={2}
        value={formData.message}
        color="secondary"
        margin="dense"
        size="small"
      />
      <Box sx={{ justifyContent: 'right', display: 'flex', marginTop: '1rem' }} >
        <Button color='secondary' type='submit' variant='contained'>
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default ContactForm;
