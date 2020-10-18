// const mysql=require("mysql");
// const util=require("util");

// const pool=mysql.createPool({
//     connectionLimit:10,
//     host: "localhost",
//     user:"root",
//     password:"",
//     database:"pokedex_alarcon_matias",
//     port:3307
// });

// pool.query=util.promisify(pool.query);

// module.exports=pool;

const bd=require("mongoose");
bd.Promise=global.Promise;

const connect=async (url)=>{
    await bd.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("Base de datos conectada")
}

module.exports=connect;