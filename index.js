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


app.get('/', (req, res)=>{
    res.send('Food service project running !!')
})

app.listen(port, ()=>{
    console.log(`Car selling & buying website running ! ${port}`)
})