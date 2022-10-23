const express = require('express');
const app = express();

const PORT = 8642;
const HOST = 'http://localhost';

app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Hello World'
    });
})

app.listen(PORT, () => {
    console.log(`App running on ${HOST}:${PORT}`);
});