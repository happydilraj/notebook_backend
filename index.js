require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express')
var cors = require('cors') 
const port = process.env.PORT || 5000

mongoose.connect(
  process.env.mongoURI,
  (err) => {
   if(err) console.log(err) 
   else console.log("mongdb is connected");
  }
);

const app = express()

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})