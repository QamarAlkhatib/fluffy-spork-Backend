'use strict'

const DataModel = require('./DataDB');
let mongoose = require("mongoose");
mongoose.connect(`${process.env.MONGO}`, { useNewUrlParser: true, useUnifiedTopology: true });

function DeleteData(req, res) {

    const id = req.query.id;
    const email = req.query.email;

    DataModel.deleteOne({
        _id: id
    }).then(() => {
        DataModel.find({
            email
        }, (function (error,
            allData) {
            if (error) {
                console.log('Error with getting the data',
                    error);
            }
            else {

                res.send(allData);
            }
        }))
    })

}

module.exports = DeleteData;