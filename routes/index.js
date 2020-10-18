var express = require('express');
var router = express.Router();
const pokemon=require("../models/pokemonModels");

/* GET home page. */
router.get('/', async function(req, res, next) {
  let resultado=await pokemon.getPokemones();
  res.render('index', { datos:resultado, sesion:req.session.estado });
});

router.post("/", async (req,res,next)=>{
  const info=req.body.entrada;
  const crudo=await pokemon.busquedaPokemon(info);
  if(crudo.length>0){
    const resultado=JSON.parse(JSON.stringify(crudo));
    res.render('index', { datos:resultado,sesion:req.session.estado});
  }
  else {
    let resultado=await pokemon.getPokemones();
    res.locals.message="No se encontró ningún Pokemon";
    res.render('index',{datos:resultado,sesion:req.session.estado});
  }
});

module.exports = router;
