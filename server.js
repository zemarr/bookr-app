const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();

//body parser middleware
app.use(bodyParser.json());

const rooms = []
app.get("/room_details",(req, res) => {
    res.status(200).send(rooms)
})



//DB config
const db = require('./server/config/keys').mongoURI;

//connect to mongodb
mongoose
.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log('mongo db connected.......'))
.catch(err => console.log(err));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));