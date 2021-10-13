'use strict'
require('dotenv').config();
const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose");
const server = express();
const PORT = process.env.PORT

server.use(cors());
server.use(express.json());
mongoose.connect(`${process.env.MONGO}`, { useNewUrlParser: true, useUnifiedTopology: true });

const getAllData = require('./modules/APIData.js');
const {addToFav,getFav} = require('./modules/AddToFav');
const DeleteData  = require('./modules/Delete')
const update = require('./modules/update')

server.get('/', homeHandler);
server.get('/AllData', getAllData);
server.post('/addToFav',addToFav)
server.get('/getFav',getFav)
server.delete('/FavDelete',DeleteData)
server.put('/updateData', update)
server.get('*', notFoundHandler);

function homeHandler(req,res){
    res.status(200).send('Home Route Working');
}
function notFoundHandler(req,res){
    res.status(404).send('Not Found');
}

server.listen(PORT,()=>{
    console.log(`Working on port ${PORT}`)
})