console.log("Inside Party_Info Controller!!!");

// Model Invoking
const model = require('../../models/System_Inputs/party_info')

//Posting FormData
exports.formdata = async (req,res,next)=>{
    try {
        const user = model(req.body);
        user.save();
        res.status(200).send("Done!!");
    } catch (error) {
        res.status(400).json({
            messeage:"Error!!!"
        })
    }
}

// Getting Table Data
exports.tabledata = async(req,res,next)=>{
    try {
        var data = await model.find({})
        res.status(200).json({
            message:true,
            tabledata:data
        })
    } catch (error) {
        res.status(400).json({
            messeage:"Error!!!"
        })
    }
}