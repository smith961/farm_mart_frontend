import React from "react";
import { Container, Typography, Paper, Grid, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { BarChart, PieChart } from "@mui/x-charts";
import { AutorenewTwoTone, DoneAllTwoTone, LocalShippingTwoTone, PendingActionsTwoTone } from "@mui/icons-material";


const Overview = () => {
    return (
        <Container >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Paper elevation={3} sx={{ padding: '2rem' }}>
                        <Typography variant='h6' align='center' gutterBottom>
                            Total Revenue
                        </Typography>
                        <Typography variant='h1' align='center' flexWrap='wrap'>
                            $41,350
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper elevation={3} sx={{ padding: '2rem' }}>
                        <Typography variant='h6' align='center' gutterBottom>
                            Total Customers
                        </Typography>
                        <Typography variant='h1' align='center' flexWrap='wrap'>
                            1,250
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={7}>
                    <Paper elevation={3} sx={{ padding: '2rem' }}>
                        <Typography variant='h6' align='center' gutterBottom flexWrap='wrap'>
                            Sales by Livestock Type
                        </Typography>
                        <PieChart
                            series={[
                                {
                                    data: [
                                        { id: 0, value: 25, label: 'Hippogriff' },
                                        { id: 1, value: 15, label: 'Elven Steed' },
                                        { id: 2, value: 20, label: 'Thestral' },
                                        { id: 3, value: 70, label: 'Unicorn' },
                                        { id: 4, value: 32, label: 'Dragon' },
                                        { id: 5, value: 41, label: 'Phoenix' },
                                    ],
                                    innerRadius: 30,
                                    paddingAngle: 5,
                                    cornerRadius: 5,
                                },
                            ]}
                            height={250}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Paper elevation={3} sx={{ padding: '2rem', height: '100%' }}>
                        <Typography variant='h6' align='center' gutterBottom flexWrap='wrap'>
                            Status Card
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <AutorenewTwoTone />
                                </ListItemIcon>
                                <ListItemText>
                                    Processing
                                </ListItemText>
                                8
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <LocalShippingTwoTone />
                                </ListItemIcon>
                                <ListItemText>
                                    Shipped
                                </ListItemText>
                                21
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <DoneAllTwoTone />
                                </ListItemIcon>
                                <ListItemText>
                                    Delivered
                                </ListItemText>
                                243
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <PendingActionsTwoTone />
                                </ListItemIcon>
                                <ListItemText>
                                    Pending
                                </ListItemText>
                                100
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Paper elevation={3}>
                        <Typography variant='h6' align='center' paddingTop={'1rem'}>
                            Quantity Sold by Month
                        </Typography>
                        <BarChart
                            xAxis={[
                                {
                                    id: 'barSales',
                                    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                                    scaleType: 'band',
                                },
                            ]}
                            series={[
                                {
                                    data: ['25', '15', '20', '70', '32', '41', '5', '31', '12', '15', '20', '70'],
                                },
                            ]}
                            height={300}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}


export default Overview;