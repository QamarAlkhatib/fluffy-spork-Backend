'use strict'

const DataModel = require('./DataDB');
let mongoose = require("mongoose");
mongoose.connect

function updateFun(req, res) {

    const { id, title, imageUrl } = req.body;

    DataModel.findByIdAndUpdate({ id }, { title, imageUrl }, (error, AllData) => res.json(AllData));
}

module.exports = updateFun