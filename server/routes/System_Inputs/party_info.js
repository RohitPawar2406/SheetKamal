const express = require('express')
const router = express.Router()

// Connecting to UserController
const UserController = require('../../controllers/System_Inputs/party_info')

//Posting Form Data
router.post('/party-info',UserController.formdata);

//Getting table Data
router.get('/party-info',UserController.tabledata);



//Exporting Router to /main.js
module.exports = router;