const express = require('express');
const router = express.Router();
const Post = require('../models/Posts');
const multer = require('multer');
const fs = require('fs');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
  var upload = multer({ storage: storage })

router.get('/', async (req, res) => {
    try{
    const allPosts = await Post.find()
    res.contentType('image/jpeg');
    res.send(result.image.buffer);
    }catch(err){
        console.log(err);
    }
   
})

router.post('/', upload.single('imageFile'), async (req, res) => {
    const img = fs.readFileSync(req.file.path);
    const encode_image = img.toString('base64');
    const image =  new Buffer.alloc(encode_image, 'base64');
    const contentType = req.file.mimetype;


     try{
        const newPost = new Post({
            image: image
        })
     const savedPost = await newPost.save()
     res.send(savedPost)
        
     }catch(err){
         console.log(err);
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