var express = require('express');
var router = express.Router();
const pokemon=require("../models/pokemonModels");

router.get("/:id",async (req,res,next)=>{
    if(!req.session.estado) res.status(401).redirect("/");
    const resultado=await pokemon.borrarPokemon(req.params.id);
    res.redirect("/");
})

module.exports=router;