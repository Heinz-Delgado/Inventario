const ajustecabecera_model = require('../model/ajustecabecera.model');

async function getConsultarAjuste(req,res){
    try {
        let servers;
        servers = await ajustecabecera_model.consultaAjuste();
        res.status(200).send({status: 200,server: servers,});
    } catch (error) {
        console.log(error);
        res.status(500).send({status: 500, error: error.message});
        
    }
}
async function postingresarAjuste(req,res) { 
    try {
        let {cab_codigo, prod_codigo, cab_fecha,cab_descripcion} = req.body;
        let servers = await ajustecabecera_model.postingresarAjuste(cab_codigo, prod_codigo, cab_fecha,cab_descripcion);
        res.status(200).send({status: 200,server: servers,});
    } catch (error) {
        res.status(500).send({status: 500, error: error.message});
        console.log(error)
    }
}
async function deleteAjuste(req, res){
    try {
        let servers = req.body.servers;
        console.log(servers)
        servers =  await ajustecabecera_model.deleteAjuste(servers);
        res.status(200).send({status: 200,server: servers,});
    } catch (error) {
        res.status(500).send({status: 500, error: error.message});
        
    }
}
async function putActualizarAjuste(req, res) {
    try {
        let {cab_codigo, prod_codigo, cab_fecha,cab_descripcion} = req.body;
        let servers = await ajustecabecera_model.ActualizarAjuste(cab_codigo, prod_codigo, cab_fecha,cab_descripcion);
        res.status(200).send({status: 200,sucursal: servers,});
    } catch (error) {
        res.status(500).send({status: 500, error: error.message});
        
    }
}
module.exports = {
    getConsultarAjuste,
    postingresarAjuste,
    deleteAjuste,
    putActualizarAjuste

    
}
