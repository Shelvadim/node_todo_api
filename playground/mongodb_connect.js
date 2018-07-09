//var MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID }=require('mongodb');
//var MongoClient = require('mongodb').MongoClient;

//var obj=new ObjectID();
// var user={name:'vadim', age:25};
// var{name}=user;
//console.log(obj);
//var pass=encodeURIComponent('b9029198775');
//console.log(pass);
var uri="mongodb+srv://shelvadim:b9029198775@cluster0-crlno.mongodb.net/test?retryWrites=true";
//console.log(uri);
MongoClient.connect(uri, (err, client)=>{
    if(err){
        return console.log('Unable to connect to Mongodb server',err);
    }
    console.log('Connected to Mongodb server');
    // const db=client.db('TodoApp');
    //const db = client.db("test").collection("devices");
    const db = client.db('test');

    db.collection('Todos').insertOne({
        text: 'some todo',
        completed:false
    }, (err, result)=>{
        if(err){
            return console.log('Unable to insert', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});