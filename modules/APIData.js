'use strict'

const axios = require('axios')

function getAllData(req,res){

    let url = `https://ltuc-asac-api.herokuapp.com/programmingLangData`
    axios.get(url).then((value)=>{
        res.json(value.data)
       
    }).catch((error)=>{
        console.log('error with getting the data', error)
    })

}

module.exports = getAllData;
