require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = process.env.DB_URI;



app.use(cors())
app.use(express.json())
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
  try {
    await client.connect();
    const coureseCollection = client.db("courseMasterDB").collection("courses");


    app.get("/courses", async (req, res) => {
      const page = parseInt(req.query.page);
      const size = parseInt(req.query.size)
 
      const courses = await coureseCollection.find()
      .skip((page-1) * size)
      .limit(size)
      .toArray();

      res.send(courses);
    })

    app.get("/courses/:slug", async (req, res) => {
      const slug = req.params.slug;
      const query = { slug };
      const result = await coureseCollection.findOne(query);
      res.send(result)
    })

    app.get("/totalCourses",async(req, res)=> {
      const count = await coureseCollection.estimatedDocumentCount();
      res.send(count);
    })

    app.post("/add-course", async(req,res)=>{
      const newCourse = req.body;
      const result = await coureseCollection.insertOne(newCourse);
      res.send(result)
    })




    await client.db("admin").command({ ping: 1 });
  } finally {

  }
}

app.listen(port, () => {
  console.log(`Course Master Sever Running on ${port}`)
})
run().catch(console.dir);