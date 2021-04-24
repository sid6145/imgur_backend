const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
 
    image:{
        type:String
    },
 
})

module.exports = mongoose.model('Posts', postSchema);