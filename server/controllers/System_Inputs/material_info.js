console.log("Inside Material_info_Controller!!")
const model = require('../../models/System_Inputs/material_info')


//Posting Form Data
exports.postFormData = async (req,res,next)=>{
    try {
        const user = new model(req.body)
        await user.save()
        res.status(200).json({
            messeage:'Done!!'
        })
    } catch (error) {
        res.status(400).json({
            messeage:"Not Able to save Data!!"
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
            messeage:"Not Able to save Data!!"
        })
    }
}