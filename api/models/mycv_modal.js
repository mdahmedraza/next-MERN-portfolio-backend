const mongoose=require('mongoose');

const myCvSchema=mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    number: Number,
    email: String,
    subject: String,
    message: String
})
module.exports=mongoose.model("Mycv", myCvSchema)