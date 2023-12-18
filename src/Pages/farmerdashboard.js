import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box } from '@mui/material';
import FarmerOverview from '../components/farmer/Overview';
import FarmerAnimals from '../components/farmer/Animals';
import FarmerCustomers from '../components/farmer/Customers';
import FarmerOrders from '../components/farmer/Orders';

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

    return (
        <Box sx={{ width: '100%' }}>
            <Typography variant='h2' align='center' gutterBottom>
                Farmer Dashboard
            </Typography>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                    <Tab label="Overview" {...a11yProps(0)} />
                    <Tab label="Animals" {...a11yProps(1)} />
                    <Tab label="Customers" {...a11yProps(2)} />
                    <Tab label="Orders" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <FarmerOverview />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <FarmerAnimals />
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