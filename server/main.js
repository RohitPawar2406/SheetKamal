const express = require('express')
require('./MongoDBConnection/mongoose')
/*const sample = require('./src/sample')
const schema = require('./src/schema')
const Material_Schema = require('./src/Material_Schema')
const LedgerSchema = require('./src/LedgerInfo')
const UserRouter = require('./src/router')*/

const app=express()
//app.use(express.static(__dirname + '/public'));
var port = process.env.PORT || 8080

app.use(express.json())
//app.use(UserRouter)

app.listen(port,()=>{
    console.log('Server is on port '+ port)
})


// For Rohit path(D:\mongodb-win32-x86_64-windows-4.4.4\bin\mongod.exe --dbpath=D:\mongodb-data)