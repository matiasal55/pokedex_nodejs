var express = require('express');
var router = express.Router();
const pokemon=require("../models/pokemonModels");
let id;

router.get("/:id",async (req,res,next)=>{
    if(!req.session.estado) res.status(401).redirect("/");
    id=req.params.id;
    let resultado=await pokemon.busquedaPokemonPorId(id);
    resultado=Object.values(JSON.parse(JSON.stringify(resultado)));
    res.locals.ruta="modificar";
    res.locals.boton="Modificar Pokemon";
    res.locals.titulo=res.locals.boton;
    res.locals.resultado=resultado[0];
    res.locals.sesion=req.session.estado;
    res.render("nuevo");
});

router.get("/",(req,res,next)=>{
    res.redirect("/");
})

router.post("/",async (req,res,next)=>{
    const resultado=await pokemon.modificarPokemon(req.body,id);
    res.redirect("/");
})

module.exports=router;