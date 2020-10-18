const pool=require("../bd");
const Model=require("./usuariosSchema");

const getUser=async (usuario,password)=>{
    try {
        const resultados=Model.find({
            usuario,
            password
        });
        return resultados;
        // let query="select id_usuario, nombre from Usuarios where usuario=? and password=?";
        // const rows=pool.query(query,[usuario,password]);
        // return rows;
    } catch(error){
        throw error;
    }
}
module.exports={getUser};