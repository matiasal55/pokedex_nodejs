const express=require("express");
const router=express.Router();
const pokemon=require("../models/pokemonModels")
let id;

router.get("/:id",async (req,res,next)=>{
  const id=req.params.id;
  let resultado=await pokemon.busquedaPokemonPorId(id);
  res.locals.sesion=req.session.estado;
  res.locals.info=resultado;
  res.render("info")
})

module.exports=router;