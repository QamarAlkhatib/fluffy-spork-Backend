'use strict'

const DataModel = require('./DataDB');
let mongoose = require("mongoose");
mongoose.connect(`${process.env.MONGO}`, { useNewUrlParser: true, useUnifiedTopology: true });

function DeleteData(req, res) {
    // const dataID = 
    const id = req.query.id;
    const email = req.query.email;


    DataModel.deleteOne({ _id: id }).then(() => {
        DataModel.find({ email }, (error, AllData) => res.json(AllData));
    })

}

module.exports = DeleteData;