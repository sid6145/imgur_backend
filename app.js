const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

// connection to mongoDB atlas using mongoose
mongoose.connect('mongodb+srv://sid123:sid123@cluster0.kjbnb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() =>{
    console.log("success");
}).catch((err) => {
    console.log(`some thing went wrong ${err}`)
})

app.use(bodyParser.json());
app.use(cors())
//importing routes from other directory
const postsRoute = require('./routes/posts');
const usersRoute = require('./routes/users');
app.use('/posts', postsRoute);
app.use('/users', usersRoute);



app.get('/', (req, res) => {
    res.send("this is home")
})


// code to run the server
app.listen(process.env.PORT || port, () =>{
    console.log(`server started on port ${port}`)
})