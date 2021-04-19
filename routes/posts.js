const express = require('express');
const router = express.Router();
const Post = require('../models/Posts')

router.get('/', (req, res) => {
   const allposts =  Post.find()
    .then((data) =>{
        res.send(data);
    })
    .catch((err) => {
        console.log(err);
    })
})

router.post('/', (req, res) => {
    const newpost = new Post({
        title:       req.body.title,
        description: req.body.description,
        imageurl:    req.body.imageurl,
        comment:     req.body.comment,
        likes:       req.body.likes
    })

    newpost.save()
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        res.send(err)
    })
})

router.delete('/:id', (req, res) => {
    Post.remove({_id: req.params.id})
    .then((data) => {
        res.send(data)
    }).catch((err) => {
        console.log(err)
    })
})

router.put('/:id', (req, res) => {
    Post.updateOne({_id: req.params.id}, 
    {    
    $set: {
        title: req.body.title, 
        description: req.body.description,
        imageurl: req.body.imageurl,
        comment: req.body.comment,
        likes: req.body.likes
    }
}).then((data) => {
        res.send(data)
    }).catch((err) => {
        console.log(err)
    })
})



module.exports = router;