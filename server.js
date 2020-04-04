const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')


const app = express();

app.use(cors());

//body parser middleware
app.use(bodyParser.json());

const routes = require('./server/routes/routes')
routes(app)

//DB config
const db = require('./server/config/keys').mongoURI;

//connect to mongodb
mongoose
.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log('mongo db connected.......'))
.catch(err => console.log(err));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));