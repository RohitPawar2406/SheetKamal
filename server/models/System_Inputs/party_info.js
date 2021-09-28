const mongoose = require('mongoose');
console.log("Inside Ledger Schema...!!!")
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
            SerialNumber:{type:String},
            LedgerName:{type:String},
            partyType:{type:String}, 
            VendorCode:{type:String},
            GST_number:{type:String},
            emailOffice: {type: String},
            emailFactory: {type: String},
            officemobile1:{type:Number},
            officemobile2:{type:Number},
            factorymobile1:{type:Number},
            factorymobile2:{type:Number} ,
            location:{type:String},
            city:{type:String},
            state:{type:String},
            factorylocation:{type:String},
            factorycity:{type:String},
            factorystate:{type:String},
});
var LedgerInfo=mongoose.model('Ledger Info', ItemSchema);
module.exports = LedgerInfo;