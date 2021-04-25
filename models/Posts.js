const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    imageurl:{
        type:String,
        required:true
    },
    comment:{
        type:String
    },
    likes:{
        type:Number,
        default:0
    }
})

module.exports = mongoose.model('Posts', postSchema);