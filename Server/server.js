const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const port = 6005;

const server = express();
server.use(cors());
server.use(bodyParser.json());




server.listen(port, () => console.log(`Server started on ${port}`));