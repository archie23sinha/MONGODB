const express = require('express');
const app = express();
const  {MongoClient , ServerApiVersion} = require('mongodb')
const PORT = 5000;


// mongodb url : mongodb+srv://archie23sinha:bKE8HghaUOCKcnea@first.ed2irjj.mongodb.net/students-database



//iT ENSURES THAT THE CLIENT WILL WORK EVEN IF THE VERSION IS UPPDATED
const client =new MongoClient("mongodb+srv://archie23sinha:bKE8HghaUOCKcnea@first.ed2irjj.mongodb.net/students-database",{
  serverApi : {
    version: ServerApiVersion.v1, 
    strict:true,
    deprecationErrors:true,
  } 
});
//function to connect

const connectDB =async ()=>
{
  try{
    await client.connect();
    console.log('connected to mongodb');

    //DATABASE NAME 
    const database = client.db('students-database');
    //COLLECTIONS(BOOKS)
    const students = database.collection('students');
//INSERT MANY

    // documents()
    // const result =await students.insertOne({
    //   name :'Bansh',
    //   age:22,
    //   subjects:["Maths","Physics"],

    // });
    // const result = await students.insertMany([
    //   {
    //   name :"Archie",
    //   age :22,
    //   grade :"O",
    //   pass:"true",
    //   subjects : ["WEB" , "DSA"],
    //   },
    //   {
    //     name :"Shubham",
    //     age :22,
    //     grade :"A",
    //     pass:"true",
    //     subjects : ["WEB" , "Java"],
    //     },
    //]);

    //READ OPERATIONS
    //FIND
//     const resultCursor =students.find();
//     const result = await resultCursor.toArray();

// // console.log(resultCursor);
//     console.log(result);

//FIND ONE
const result = await students.findOne({
  age:22,
});
console.log(result);

  }
  catch(error)
  {
    console.log('error connecting to mongodb');
    console.log(error);
  }
};

//call the function

connectDB();
//start the server

app.listen(PORT ,() =>console.log(`Server is running on port ${PORT}`));

