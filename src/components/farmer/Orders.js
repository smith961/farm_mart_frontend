import React from "react";
import { Paper } from "@mui/material";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    {
        field: 'customerName', headerName: 'Customer', width: 180,
        valueGetter: (params) => `${params.row.customerFirstName || ''} ${params.row.customerLastName || ''}`
    },
    { field: 'livestockType', headerName: 'Livestock Type', width: 150 },
    { field: 'quantity', headerName: 'Quantity', type: 'number', width: 80 },
    { field: 'unitPrice', headerName: 'Unit Price', type: 'number', width: 120 },
    { field: 'total', headerName: 'Total', type: 'number', width: 120 },
    { field: 'status', headerName: 'Status', width: 120 },
    {
        field: 'orderDate',
        headerName: 'Order Date',
        type: 'date',
        width: 150,
        valueGetter: (params) => new Date(params.row.orderDate),
    },
    {
        field: 'deliveryDate',
        headerName: 'Delivery Date',
        type: 'date',
        width: 150,
        valueGetter: (params) => new Date(params.row.deliveryDate),
    },
];


const rows = [
    {
        id: 1,
        customerFirstName: 'Harry',
        customerLastName: 'Potter',
        livestockType: 'Hippogriff',
        quantity: 2,
        unitPrice: 500,
        total: 1000,
        status: 'Pending',
        orderDate: '2023-12-17T09:00:00',
        deliveryDate: '2023-12-21T14:30:00'
    },
    {
        id: 2,
        customerFirstName: 'Frodo',
        customerLastName: 'Baggins',
        livestockType: 'Elven Steed',
        quantity: 1,
        unitPrice: 800,
        total: 800,
        status: 'Shipped',
        orderDate: '2023-12-16T15:45:00',
        deliveryDate: '2023-12-20T11:00:00'
    },
    {
        id: 3,
        customerFirstName: 'Arya',
        customerLastName: 'Stark',
        livestockType: 'Direwolf',
        quantity: 3,
        unitPrice: 600,
        total: 1800,
        status: 'Processing',
        orderDate: '2023-12-15T11:30:00',
        deliveryDate: '2023-12-19T09:15:00'
    },
    {
        id: 4,
        customerFirstName: 'Hermione',
        customerLastName: 'Granger',
        livestockType: 'Phoenix',
        quantity: 1,
        unitPrice: 1200,
        total: 1200,
        status: 'Delivered',
        orderDate: '2023-12-14T14:20:00',
        deliveryDate: '2023-12-18T16:45:00'
    },
    {
        id: 5,
        customerFirstName: 'Samwise',
        customerLastName: 'Gamgee',
        livestockType: 'Ent',
        quantity: 2,
        unitPrice: 700,
        total: 1400,
        status: 'Pending',
        orderDate: '2023-12-13T10:00:00',
        deliveryDate: '2023-12-17T13:30:00'
    },
    {
        id: 6,
        customerFirstName: 'Daenerys',
        customerLastName: 'Targaryen',
        livestockType: 'Dragon',
        quantity: 1,
        unitPrice: 1500,
        total: 1500,
        status: 'Shipped',
        orderDate: '2023-12-12T12:45:00',
        deliveryDate: '2023-12-16T10:20:00'
    },
    {
        id: 7,
        customerFirstName: 'Gandalf',
        customerLastName: 'Grey',
        livestockType: 'Great Eagle',
        quantity: 1,
        unitPrice: 1000,
        total: 1000,
        status: 'Processing',
        orderDate: '2023-12-11T09:30:00',
        deliveryDate: '2023-12-15T15:00:00'
    },
    {
        id: 8,
        customerFirstName: 'Leia',
        customerLastName: 'Organa',
        livestockType: 'Tauntaun',
        quantity: 2,
        unitPrice: 900,
        total: 1800,
        status: 'Delivered',
        orderDate: '2023-12-10T16:15:00',
        deliveryDate: '2023-12-14T12:10:00'
    },
    {
        id: 9,
        customerFirstName: 'Sherlock',
        customerLastName: 'Holmes',
        livestockType: 'Basilisk',
        quantity: 1,
        unitPrice: 2000,
        total: 2000,
        status: 'Pending',
        orderDate: '2023-12-09T13:00:00',
        deliveryDate: '2023-12-13T11:45:00'
    },
    {
        id: 10,
        customerFirstName: 'Eowyn',
        customerLastName: 'Rohan',
        livestockType: 'Mearas',
        quantity: 1,
        unitPrice: 1100,
        total: 1100,
        status: 'Shipped',
        orderDate: '2023-12-08T11:20:00',
        deliveryDate: '2023-12-12T14:55:00'
    },
    {
        id: 11,
        customerFirstName: 'Luke',
        customerLastName: 'Skywalker',
        livestockType: 'Womp Rat',
        quantity: 3,
        unitPrice: 300,
        total: 900,
        status: 'Processing',
        orderDate: '2023-12-07T14:30:00',
        deliveryDate: '2023-12-11T09:45:00'
    },
    {
        id: 12,
        customerFirstName: 'Katniss',
        customerLastName: 'Everdeen',
        livestockType: 'Mockingjay',
        quantity: 1,
        unitPrice: 500,
        total: 500,
        status: 'Delivered',
        orderDate: '2023-12-06T10:15:00',
        deliveryDate: '2023-12-10T12:30:00'
    },
    {
        id: 13,
        customerFirstName: 'Jack',
        customerLastName: 'Sparrow',
        livestockType: 'Kraken',
        quantity: 2,
        unitPrice: 700,
        total: 1400,
        status: 'Pending',
        orderDate: '2023-12-05T12:00:00',
        deliveryDate: '2023-12-09T14:20:00'
    },
    {
        id: 14,
        customerFirstName: 'Ellen',
        customerLastName: 'Ripley',
        livestockType: 'Facehugger',
        quantity: 1,
        unitPrice: 900,
        total: 900,
        status: 'Shipped',
        orderDate: '2023-12-04T11:45:00',
        deliveryDate: '2023-12-08T16:00:00'
    },
    {
        id: 15,
        customerFirstName: 'John',
        customerLastName: 'McClane',
        livestockType: 'Nakatomi Plaza',
        quantity: 1,
        unitPrice: 1200,
        total: 1200,
        status: 'Processing',
        orderDate: '2023-12-03T09:30:00',
        deliveryDate: '2023-12-07T13:15:00'
    },
    {
        id: 16,
        customerFirstName: 'Ellie',
        customerLastName: 'Sattler',
        livestockType: 'Velociraptor',
        quantity: 2,
        unitPrice: 1000,
        total: 2000,
        status: 'Delivered',
        orderDate: '2023-12-02T13:20:00',
        deliveryDate: '2023-12-06T10:45:00'
    },
    {
        id: 17,
        customerFirstName: 'Tony',
        customerLastName: 'Stark',
        livestockType: 'Iron Man Suit',
        quantity: 1,
        unitPrice: 1500,
        total: 1500,
        status: 'Pending',
        orderDate: '2023-12-01T15:00:00',
        deliveryDate: '2023-12-05T11:30:00'
    },
    {
        id: 18,
        customerFirstName: 'Walter',
        customerLastName: 'White',
        livestockType: 'Blue Crystal',
        quantity: 1,
        unitPrice: 1800,
        total: 1800,
        status: 'Shipped',
        orderDate: '2023-11-30T09:45:00',
        deliveryDate: '2023-12-04T14:20:00'
    },
    {
        id: 19,
        customerFirstName: 'Katara',
        customerLastName: 'Waterbender',
        livestockType: 'Appa',
        quantity: 2,
        unitPrice: 1300,
        total: 2600,
        status: 'Processing',
        orderDate: '2023-11-29T14:15:00',
        deliveryDate: '2023-12-03T12:30:00'
    },
    {
        id: 20,
        customerFirstName: 'Captain',
        customerLastName: 'America',
        livestockType: 'Super Soldier Serum',
        quantity: 1,
        unitPrice: 2000,
        total: 2000,
        status: 'Delivered',
        orderDate: '2023-11-28T12:30:00',
        deliveryDate: '2023-12-02T16:00:00'
    }
];


const Orders = () => {
    return (
        <Paper elevation={3}>
            <DataGrid
                sx={{ padding: '2rem' }}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[5, 10, 25]}
                slots={{ toolbar: GridToolbar }}
            />
        </Paper>
    );
}

export default Orders;
