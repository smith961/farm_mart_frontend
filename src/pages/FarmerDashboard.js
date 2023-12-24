import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box, Fab, TextField, Container, Button, Modal, Paper, InputAdornment } from '@mui/material';
import FarmerOverview from '../components/farmer/Overview';
import FarmerAnimals from '../components/farmer/Animals';
import FarmerCustomers from '../components/farmer/Customers';
import FarmerOrders from '../components/farmer/Orders';
import { Add } from '@mui/icons-material';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const FarmerDashboard = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    async function handleAddAnimal() {
        handleClose();
    };


    return (
        <Box sx={{ width: '100%' }}>
            <Typography variant='h2' align='center' gutterBottom>
                Farmer Dashboard
            </Typography>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                    <Tab label="Overview" {...a11yProps(0)} />
                    <Tab label="Livestock" {...a11yProps(1)} />
                    <Tab label="Customers" {...a11yProps(2)} />
                    <Tab label="Orders" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <FarmerOverview />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <FarmerAnimals />
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <Paper sx={{
                        position: 'absolute',
                        width: 400,
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        padding: 2
                    }}>
                        <Typography variant={"h6"} sx={{ padding: 2 }} textAlign={"center"}>
                            Add New Animal
                        </Typography>
                        <TextField
                            fullWidth
                            label="Name"
                            sx={{ marginBottom: 2 }}
                        />
                        <TextField
                            fullWidth
                            label="Description"
                            sx={{ marginBottom: 2 }}
                            multiline
                            rows={3}
                        />
                        <TextField
                            fullWidth
                            label="Unit Price"
                            sx={{ marginBottom: 2 }}
                            type='number'
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                        />
                        <TextField
                            fullWidth
                            label="Quantity Available"
                            sx={{ marginBottom: 2 }}
                            type='number'
                        />
                        <Container sx={{ display: "flex", justifyContent: "center" }}>
                            <Button variant="contained" color="primary" onClick={handleAddAnimal}>
                                Save to Farm
                            </Button>
                        </Container>
                    </Paper>
                </Modal>
                <Fab color="primary" variant={"extended"} onClick={handleOpen} sx={{ position: "fixed", bottom: 15, right: 15 }}>
                    <Add sx={{ mr: 1 }} />
                    Add Animal
                </Fab>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <FarmerCustomers />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <FarmerOrders />
            </CustomTabPanel>
        </Box>
    );
}

export default FarmerDashboard;