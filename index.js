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




async function run(){
    try{
        const carCollection = client.db('CarProducts').collection('catCategories');
        const luxuryCarCollection = client.db('CarProducts').collection('LuxuryCar');
        const electricCarCollection = client.db('CarProducts').collection('electricCars');
      


   // for home page service find  query
         app.get('/categories', async(req, res)=>{
            const query = {} 
            const cursor = carCollection.find(query);
            const categories  = await cursor.limit(3).toArray();
            res.send(categories);
        })
        // for microbus 
        app.get('/microbusCar', async(req, res)=>{
            const query = {} 
            const cursor = luxuryCarCollection.find(query);
            const categories  = await cursor.limit(3).toArray();
            res.send(categories);
        })

        app.get('/electricCars', async(req, res)=>{
            const query = {} 
            const cursor = electricCarCollection.find(query);
            const categories  = await cursor.limit(3).toArray();
            res.send(categories);
        })
    
    
        
    
      
      
        // see all service 
        // app.get('/allService', async(req, res)=>{
        //     const query = {} 
        //     const cursor = serviceCollection.find(query);
        //     const services  = await cursor.toArray();
        //     res.send(services);
        // })
    
       // service details api 
    
        app.get('/services/:id', async (req, res)=>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const service = await serviceCollection.findOne(query) ;
            res.send(service)
        })
       
       
    
    }
    finally{
    
    }
    }
    run().catch(err=>console.log(err))



app.get('/', (req, res)=>{
    res.send('Food service project running !!')
})

app.listen(port, ()=>{
    console.log(`Car selling & buying website running ! ${port}`)
})