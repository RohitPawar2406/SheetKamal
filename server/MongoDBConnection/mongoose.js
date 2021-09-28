const mongoose = require('mongoose')
console.log('Inside Mongoose')
//const uri = "mongodb://127.0.0.1:27017/sheetkamal";
const uri = "mongodb+srv://sheetkamal:Rohit%402406@cluster0.carsb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(uri,{
     useNewUrlParser: true, useUnifiedTopology: true
  });
