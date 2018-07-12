var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.URI)
.catch((error) => { 
  return console.log('oshibka',error);
 });
 console.log('connected');

 module.exports={
     mongoose:mongoose
 };