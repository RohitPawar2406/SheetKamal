const express = require('express')
const router = express.Router()

//Model Importing 
const material_info_schema_model = require('../../models/System_Inputs/material_info')

//Connecting To UserController
const UserController = require('../../controllers/System_Inputs/material_info')

//Getting Form Data
router.post('/material-info',UserController.postFormData)

//Printing data In table Format
router.get('/material-info',UserController.tabledata);

module.exports = router;
