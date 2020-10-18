var express = require('express');
var router = express.Router();
const usuariosModel=require("../models/usuariosModel");

router.post("/",async(req,res,next)=>{
    try {
        let resultado=await usuariosModel.getUser(req.body.usuario,req.body.password);
        if(resultado.length>0){
            req.session.usuario=resultado[0].id_usuario;
            req.session.estado=true;
            res.redirect("/");
        } else {
            res.locals.messageLogin="mensaje";
            res.status(401).redirect("/");
        }

    } catch(error){
        console.log(error);
    }
})

router.get("/",(req,res,next)=>{
    if(req.query.logout && req.session.estado){
        req.session.usuario=undefined;
        req.session.estado=undefined;
    }
    res.redirect("/");
})

module.exports=router;