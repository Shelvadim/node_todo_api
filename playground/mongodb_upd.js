//var MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID }=require('mongodb');


var uri="mongodb+srv://shelvadim:b9029198775@cluster0-crlno.mongodb.net/test?retryWrites=true";

MongoClient.connect(uri, (err, client)=>{
    if(err){
        return console.log('Unable to connect to Mongodb server',err);
    }
    console.log('Connected to Mongodb server');
    
    
    const db = client.db('test');

    
    //deleteMany doesnot work
    //deleteOne ok
    //findOneAndDelete
    db.collection('Todos').findOneAndUpdate({
        'text':'eat lanch'
    },{
        $set:{
            completed:true
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });

    //client.close();
});