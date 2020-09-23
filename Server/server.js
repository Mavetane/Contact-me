const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 6005;
const { MongoServer } = require('./config/keys');
const { admin } = require('./routes/admin')

const server = express();
server.use(cors());
server.use(bodyParser.json());
MongoServer(server);
admin(server);




server.listen(port, () => console.log(`Server started on ${port}`));