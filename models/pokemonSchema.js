const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const pokemonSchema=new Schema({
    id_pokemon:{
        type:Number,
        index:true,
        unique:true
    },
    imagen: String,
    tipo: {
        type:String,
        lowercase:false
    },
    nombre:{
        type:String,
        unique:true
    },
    descripcion:String
})

const model=mongoose.model("listaPokemon",pokemonSchema);

module.exports=model;