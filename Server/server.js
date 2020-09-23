const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 6005;
const { MongoServer } = require('./config/keys')

const server = express();
server.use(cors());
server.use(bodyParser.json());
MongoServer(server)




server.listen(port, () => console.log(`Server started on ${port}`));