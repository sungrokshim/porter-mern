const express = require('express');
const db = require('./src/db');
const app = express();
const PORT = 8080;

app.get('/platforms', (req, res) => {
    res.send('Hello! This is an example MERN stack that can be deployed on Porter.')
})

app.listen(PORT , () => {
    console.log(`Server listening on PORT ${PORT}`)
})