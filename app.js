const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer')
const app = express();


const port = 4000;

// connection string
mongoose.connect('mongodb+srv://sid123:sid123@cluster0.kjbnb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() =>{
    console.log("success");
}).catch((err) => {
    console.log(`some thing went wrong ${err}`)
})


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//multer storage



//importing routes 
const postsRoute = require('./routes/posts');
const usersRoute = require('./routes/users');
app.use('/posts', postsRoute);
app.use('/users', usersRoute);





app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


// server runs here
app.listen(process.env.PORT || port, () =>{
    console.log(`server started on port ${port}`)
})