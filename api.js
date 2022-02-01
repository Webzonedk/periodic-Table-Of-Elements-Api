const express = require('express');
const api = express();
const cors = require('cors');
const port = 3000;

let elements = require('./data/elements.json');
api.use(express.json());
api.use(express.urlencoded({ extended: true }));
api.use(cors());




//Sending the json on requests
api.get('/getElements', (req, res) => {
    res.status(200).send(elements)
});

api.listen(port, () => console.log(`listening on port ${port}!`));