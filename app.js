const express = require('express');
const app = express();

const PORT = process.env.PORT || 8642;
const HOST = 'http://localhost';

app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Hello World !!!'
    });
})

app.get('/hi', (req, res) => {
    return res.status(200).json({
        message: 'Hi!!!'
    });
})

app.get('/hey', (req, res) => {
    return res.status(200).json({
        message: 'Hey!!!'
    });
})

app.get('/hello', (req, res) => {
    return res.status(200).json({
        message: 'Hello!!!'
    });
})

app.listen(PORT, () => {
    console.log(`App running on ${HOST}:${PORT}`);
});