import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Box, Button } from "@mui/material";


const ContactUs = () => {
    return (
        <Container >
            <Typography variant='h2' align='center' gutterBottom>
                Contact Us
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: '5rem', pb: '5rem' }}>
                <Button variant='contained' component={Link} to='/'>
                    Home
                </Button>
            </Box>
        </Container>
    );
}

export default ContactUs;