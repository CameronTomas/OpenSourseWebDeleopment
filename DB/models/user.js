const express = require('express');
const mongoose = require('mongoose');
//require('db/mongoose/mongoose.js');

mongoose.model('User',{
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

module.exports = User;