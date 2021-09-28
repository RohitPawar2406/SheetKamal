const express = require('express')
const router = express.Router()

//Connecting to UserController
const Usercontroller = require('../../controllers/System_Inputs/company_info')

const company_info_Model = require('../../models/System_Inputs/company_info')

//Getting Form Data
router.post('/Company-Info',Usercontroller.postFormData);

// Printing Complete Data from Collections.
router.get('/Company-Info',Usercontroller.showingTableData);


module.exports = router;