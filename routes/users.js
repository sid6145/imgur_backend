const express = require('express');
const router = express.Router();
const User = require('../models/Users') 

router.get('/', async (req, res) => {
 try{
    const allUsers = await User.find();
    res.send(allUsers);
}
 catch (err){
    console.log(err);
}
   
});

router.post('/', async (req, res) => {
 try{
    const newUser = new User({
        username: req.body.username,
        password: req.body.password,
        email : req.body.email
    });
     const savedUser = await newUser.save()
     res.send(savedUser)
   } 
 catch(err){
       console.log(err);
   }
   

})

router.delete('/:userid', async (req, res) => {

 try{
    const removedUser = await User.remove({_id:req.params.userid});
    res.send(removedUser);
 }  
 catch(err){
    console.log(err);
 }
    
})

router.put('/:userid', async (req, res) => {

 try{
    const updatedUser = await User.updateOne({_id:req.params.userid},
        {
     $set:{
                username: req.body.username, 
                password: req.body.password, 
                email:  req.body.email
            }
        })
        res.send(updatedUser);
    }
 catch(err){
     console.log(err);
 }

})

module.exports = router;