var mongoose = require('mongoose');

var uri="mongodb+srv://shelvadim:b9029198775@cluster0-crlno.mongodb.net/test?retryWrites=true";

mongoose.Promise = global.Promise;

mongoose.connect(uri)
.catch((error) => { 
  return console.log('oshibka',error);
 });
 console.log('connected');

 module.exports={
     mongoose:mongoose
 };