const express = require('express');
const router = express.Router();
const User = require('../models/Users') 

router.get('/', function(req, res){
   User.find()
   .then((data) => {
       res.send(data)
   })
   .catch((err) => {
       res.send(err)
   })
});

router.post('/', (req, res) => {
    const newuser = new User({
        username: req.body.username,
        password: req.body.password,
        email : req.body.email
    });

    newuser.save()
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.send(err)
    })

})

router.delete('/:userid', (req, res) => {

   
    User.remove({_id:req.params.userid})
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        res.send(err)
    })

})

router.put('/:userid', (req, res) => {

    User.updateOne({_id:req.params.userid},
        {
     $set:{
                username: req.body.username, 
                password: req.body.password, 
                email:  req.body.email
            }
        })
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        res.send(err)
    })

})

module.exports = router;