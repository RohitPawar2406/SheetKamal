const mongoose = require('mongoose');
console.log("Inside Schema...!!!")
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
        SerialNumber:{type:String},
        CompanyName:{type:String},   
        emailOffice:{type: String},    
        emailFactory:{type: String},          
        GST_number:{type:String},
        PAN_number:{type:String},
        officemobile1:{type:Number},
        officemobile2:{type:Number},
        factorymobile1:{type:Number},
        factorymobile2:{type:Number},
        location:{type:String},
        city:{type:String},
        state:{type:String},         
        factorylocation:{type:String},
        factorycity:{type:String},
        factorystate:{type:String},    
});

const CompanyInfo = mongoose.model('Company Info', ItemSchema);
module.exports = CompanyInfo