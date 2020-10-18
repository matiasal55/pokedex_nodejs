const express=require("express");
const router=express.Router();
const pokemon=require("../models/pokemonModels");
let id;

router.get("/",(req,res,next)=>{
    if(!req.session.estado) res.status(401).redirect("/");
    res.locals.sesion=req.session.estado;
    res.locals.ruta="nuevo";
    res.locals.titulo="Nuevo Pokémon";
    res.locals.boton="Cargar Pokémon";
    res.render("nuevo");
});

router.post("/",async (req,res,next)=>{
    const resultado=await pokemon.insertarPokemon(req.body);
    res.redirect("/");
})

module.exports=router;