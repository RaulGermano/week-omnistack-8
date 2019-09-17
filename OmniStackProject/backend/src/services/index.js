const express = require('express');
const router = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const { user, pass, dataBase } = require('../config/mongoAuthenticate');

const server = express();

mongoose.connect(
	`mongodb+srv://${user}:${pass}@cluster0-ticmx.mongodb.net/${dataBase}?retryWrites=true&w=majority`,
	{ useNewUrlParser: true }
);

server.use(cors());
server.use(express.json());
server.use(router);

server.listen(3000);
