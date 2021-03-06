'use strict'

const DataModel = require('./DataDB');
let mongoose = require("mongoose");
mongoose.connect(`${process.env.MONGO}`, { useNewUrlParser: true, useUnifiedTopology: true });

// /FavDelete?&id=${id}
async function DeleteData(req, res) {

    const id = req.query.id;
    const email = req.query.email;

    await DataModel.deleteOne({ _id: id }).then(() => {
        DataModel.find({
            email:email
        }, (function (error,
            allData) {
            if (error) {
                console.log('Error with getting the data',
                    error);
            }
            else {

                res.json(allData);
            }
        }))

    })
}

module.exports = DeleteData;