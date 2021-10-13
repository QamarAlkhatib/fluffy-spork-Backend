'use strict'

const DataModel = require('./DataDB');
let mongoose = require("mongoose");
mongoose.connect

function updateFun(req, res) {

    const idData = req.params.id;
    const {title, imageUrl ,email} = req.body;
    console.log(req.body)

    DataModel.findByIdAndUpdate({ _id:idData }, { title, imageUrl }, (error, updatedData) => {
        if (error) {
            console.log('Error with updating the data', error);
        }
        else {
            console.log(updatedData);
            DataModel.find({ email }, (function (error, allData) {
                if (error) {
                    console.log('Error with getting the data', error);
                }
                else {
                    console.log(allData);
                    res.send(allData);
                }
            }))
            res.json(updatedData);
        }
    })
}

module.exports = updateFun