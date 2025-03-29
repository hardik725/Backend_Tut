// const express = require('expresss');
import express from 'express';

const app = express();

// app.get('/', (req, res) =>{
//     res.send('server is ready');
// });

// get a list of a 5 jokes

app.get('/jokes', (req, res) =>{
const jokes = [
    {
        id: 1,
        title: '1 joke',
        content: 'This is a 1st joke'
    },
    {
        id: 1,
        title: '2 joke',
        content: 'This is a 2nd joke'
    },
    {
        id: 1,
        title: '3 joke',
        content: 'This is a 3rd joke'
    },
    {
        id: 1,
        title: '4 joke',
        content: 'This is a 4th joke'
    },
    {
        id: 1,
        title: '5 joke',
        content: 'This is a 5th joke'
    }
];
res.send(jokes);
});

const port = process.env.PORT || 4000;

app.listen(port, ()=>{
    console.log(`Server at http://localhost:${port}`);
});