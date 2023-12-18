import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Box, Button, Paper } from "@mui/material";


const Orders = () => {
    return (
        <Paper elevation={3} sx={{ padding: '2rem' }} square>
            <Container >
                <Typography variant='h2' align='center' gutterBottom>
                    Orders
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: '5rem', pb: '5rem' }}>
                    <Button variant='contained' component={Link} to='/'>
                        Home
                    </Button>
                </Box>
            </Container>
        </Paper>
    );
}


export default Orders;