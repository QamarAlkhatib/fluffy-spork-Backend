'use strict'

const DataModel = require('./DataDB');
let mongoose = require("mongoose");
mongoose.connect(`${process.env.MONGO}`, { useNewUrlParser: true, useUnifiedTopology: true });

function DeleteData(req, res) {
    // const dataID = 
    const { id} = req.body;

    DataModel.deleteOne({ id }, (error, AllData) => res.json(AllData))
}

module.exports = DeleteData;