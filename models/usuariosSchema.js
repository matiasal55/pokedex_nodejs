const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const userSchema=new Schema({
    usuario: String,
    password:String
});

const model=mongoose.model("usuarios",userSchema);

module.exports=model;