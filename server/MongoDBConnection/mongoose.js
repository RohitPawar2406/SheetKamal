const mongoose = require('mongoose')
console.log('Inside Mongoose')
const uri = "mongodb+srv://sheetkamal:Rohit@2406@cluster0.carsb.mongodb.net";
mongoose.connect(uri,{
     useNewUrlParser: true, useUnifiedTopology: true
  });
