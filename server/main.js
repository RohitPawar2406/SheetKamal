const express = require('express')
require('./MongoDBConnection/mongoose')

//Routes
const company_info = require('./routes/System_Inputs/company_info')
const material_info = require('./routes/System_Inputs/material_info')
const party_info = require('./routes/System_Inputs/party_info')

const app=express()
//app.use(express.static(__dirname + '/public'));
var port = process.env.PORT || 8080

app.use(express.json())

// Middleware For Routes
app.use(company_info)
app.use(material_info)
app.use(party_info)


// Server Listening
app.listen(port,()=>{
    console.log('Server is on port '+ port)
})

//Hello
// For Rohit path(D:\mongodb-win32-x86_64-windows-4.4.4\bin\mongod.exe --dbpath=D:\mongodb-data)