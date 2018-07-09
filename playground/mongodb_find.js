//var MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID }=require('mongodb');


var uri="mongodb+srv://shelvadim:b9029198775@cluster0-crlno.mongodb.net/test?retryWrites=true";

MongoClient.connect(uri, (err, client)=>{
    if(err){
        return console.log('Unable to connect to Mongodb server',err);
    }
    console.log('Connected to Mongodb server');
    
    
    const db = client.db('test');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b3bc586578b241682d03904')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //     console.log('Unable to fetch',err);
    // });

    db.collection('Todos').find().count().then((count)=>{
        console.log('Todos count:',count);
        //console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
        console.log('Unable to fetch',err);
    });

    //client.close();
});