'use strict'

const DataModel = require('./DataDB');
let mongoose = require("mongoose");
mongoose.connect

function updateFun(req, res) {

    const { id, title, imageUrl ,email} = req.body;

    DataModel.findByIdAndUpdate({ id }, { title, imageUrl }, (error, updatedData) => {

        if (error) {
            console.log('Error with updating the data', error);
        }
        else {
            console.log(updatedData);
            bookModal.find({ email }, (function (error, allData) {
                if (error) {
                    console.log('Error with getting the data', error);
                }
                else {
                    console.log(allData);
                    res.send(allData);
                }
            }))
            res.send(updatedData);
        }
    })
}

module.exports = updateFun