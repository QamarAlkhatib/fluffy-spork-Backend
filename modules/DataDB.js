'use strict'
let mongoose = require("mongoose");
let Schema = mongoose.Schema;
mongoose.connect(`${process.env.MONGO}`,{ useNewUrlParser: true, useUnifiedTopology: true });


const  APIData = new Schema({

    title:String,
    imageUrl:String,
    id:Number,
    email:String
})

const DataModel = mongoose.model('programming',APIData)

module.exports = DataModel;
