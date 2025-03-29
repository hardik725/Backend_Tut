import express from 'express';

const app = express();

// Get a list of 5 jokes
app.get('/', (req,res) => {
    res.send('Server is Running');
})

app.get('/jokes', (req, res) => {
    const jokes = [
        { id: 1, title: '1st joke', content: 'This is the 1st joke' },
        { id: 2, title: '2nd joke', content: 'This is the 2nd joke' },
        { id: 3, title: '3rd joke', content: 'This is the 3rd joke' },
        { id: 4, title: '4th joke', content: 'This is the 4th joke' },
        { id: 5, title: '5th joke', content: 'This is the 5th joke' }
    ];
    res.json(jokes); // Use `res.json()` instead of `res.send()`
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});