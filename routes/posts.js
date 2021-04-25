const express = require('express');
const router = express.Router();
const Post = require('../models/Posts')

router.get('/', async (req, res) => {
    try{
        const allposts = await Post.find()
        res.send(allposts);
    }
    catch(err){
        console.log(err)
    }   
})

router.post('/', async (req, res) => {
    const newpost =  new Post({
        title:       req.body.title,
        description: req.body.description,
        imageurl:    req.body.imageurl,
        comment:     req.body.comment,
        likes:       req.body.likes
    })

    const savedPost = await newpost.save()
   try{
       res.send(savedPost)
   }catch(err){
       console.log(err)
   }
})

router.delete('/:id', async (req, res) => {
  const removedPost = await  Post.remove({_id: req.params.id})
  try{
    res.send(removedPost)
 }catch(err){
    console.log(err)
 }
})

router.put('/:id', async (req, res) => {
   try{ 
    const updatedPost = await Post.updateOne({_id: req.params.id}, 
    {    
        $set: {
            title: req.body.title, 
            description: req.body.description,
            imageurl: req.body.imageurl,
            comment: req.body.comment,
            likes: req.body.likes
             }
    })
    res.send(updatedPost)
   }
   catch(err){
        console.log(err)
   } 

   
})



module.exports = router;