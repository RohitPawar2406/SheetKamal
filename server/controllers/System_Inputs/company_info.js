const model_file = require('../../models/System_Inputs/company_info')

exports.postFormData = async (req,res,next)=>{
    console.log("Posting Form Data of Company Info!!");
    try {
        const user = new model_file(req.body)
        await user.save()
        res.status(200).json({
            message:true
        })
    } catch (error) {
        res.status(400).json({
            message:"Posting Error!!!"
        })
    }

}

exports.showingTableData = async (req,res,next)=>{
    try {
        var data = await model_file.find({})
        res.status(200).json({
            message:true,
            tabledata:data
        })
    } catch (error) {
        res.status(400).json({
            message:"Error!!!"
        })
    }
}