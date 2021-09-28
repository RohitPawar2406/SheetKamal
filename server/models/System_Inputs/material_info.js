const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MaterialSchema = new Schema ({
        SerialNumber:{type:String},
        Material_Code:{type:String},
        UOM:{type:String}, //Scrolling options are available.
        Line_Number:{type:String},
        Material_Description:{type:String},
        Material_type:{type:String},
        SGST:{type:Number},
        CGST:{type:Number},
        IGST:{type:Number},
        HSN_Code:{type:String},
        po:{type:String},
        rate:{type:Number}
})

var MaterialInfo=mongoose.model('Material info', MaterialSchema);
module.exports = MaterialInfo;