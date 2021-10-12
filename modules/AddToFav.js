'use strict'

const DataModel = require('./DataDB');
let mongoose = require("mongoose");
mongoose.connect(`${process.env.MONGO}`, { useNewUrlParser: true, useUnifiedTopology: true });

function addToFav(req, res) {

    const { title, imageUrl, id, email } = req.body;
    const newData = {
        title,
        imageUrl,
        id,
        email,
    }
    DataModel.create(newData).then(function (dbData) {
        res.json(dbData);

        console.log(dbData)
    })

    // res.json(newData);
}

function getFav(req, res) {
    DataModel.find({ }, (error, AllData) => res.json(AllData))
}

module.exports = { addToFav, getFav }
