const pool=require("../bd")
const Model=require("./pokemonSchema");

const getPokemones=async ()=>{
    try {
        // let query="select * from Pokemones";
        // let rows= pool.query(query);
        // return rows;
        const resultados=Model.find();
        return resultados;
    }
    catch(error){
        throw error;
    }
}

const busquedaPokemonPorId=async(id)=>{
    try {
        // let query="select * from Pokemones where id_pokemon=?";
        // let resultado= pool.query(query,[id]);
        // return resultado;
        const filter={id_pokemon:id}
        const resultado=await Model.find(filter);
        return resultado;
    }
    catch(error){
        throw error;
    }
}

const busquedaPokemon=async(dato)=>{
    try {
        // let query="select * from Pokemones where id_pokemon=? or tipo=? or nombre=?";
        // let rows=pool.query(query,[dato,dato,dato]);
        // return rows;
        let filter;
        let resultados;
        if(isNaN(dato)){
        filter=[{
            nombre:dato
        },{
            tipo:dato
        }]
        resultados=Model.find({$or:filter});
        }
        else {
            filter={
                id_pokemon:dato
            }
            resultados=Model.find(filter);
        }
        return resultados;
    }
    catch(error){
        throw error;
    }
}

const insertarPokemon=async(datos)=>{
    try{
        const pokemon=new Model(datos);
        const resultado=await pokemon.save();
        return resultado;
        // let query="insert into Pokemones set ?";
        // let rows=pool.query(query,[datos]);
        // return rows;
    }
    catch (error){
        throw error;
    }
}

const borrarPokemon=async(id)=>{
    try{
        // let query="delete from Pokemones where id_pokemon=?";
        // let rows=pool.query(query,[id]);
        // return rows;
        return await Model.deleteOne({
            id_pokemon:id
        })
    }
    catch (error){
        throw error;
    }
}

const modificarPokemon=async(datos,id)=>{
    try{
        // let query="update Pokemones set ? where id_pokemon=?";
        // let rows=pool.query(query,[datos,id]);
        // return rows;
        const resultado=Model.findOne({id_pokemon:id},(err,info)=>{
            for(let dato in Model.schema.paths){
                if(dato!="_id") info[dato]=datos[dato];
        }
        info.save();
        })
        return resultado;
    }
    catch (error){
        throw error;
    }
}

module.exports={getPokemones, busquedaPokemon, insertarPokemon, borrarPokemon, busquedaPokemonPorId, modificarPokemon}