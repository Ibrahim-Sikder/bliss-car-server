const express = require('express')
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000 ;

// middleware 
app.use(cors())
app.use(express.json())

// database connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.u82gun1.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });






app.get('/', (req, res)=>{
    res.send('Food service project running !!')
})

app.listen(port, ()=>{
    console.log(`Car selling & buying website running ! ${port}`)
})