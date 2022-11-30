const {inventario} = require('../config/cnn');

async function consultaAjuste (){
    const query = 'select * from ajustecabecera';
    const result = await inventario.query(query);
    return result.rows;
}
async function postingresarAjuste(cab_codigo, prod_codigo, cab_fecha,cab_descripcion) {
    const query = 'INSERT INTO public.ajustecabecera(cab_codigo, prod_codigo, cab_fecha,cab_descripcion) VALUES ( $1, $2,$3,$4);'
    const servers = await inventario.query(query, [cab_codigo, prod_codigo, cab_fecha,cab_descripcion]);   
    return servers.rows;    
}
 async function ActualizarAjuste(cab_codigo, prod_codigo, cab_fecha,cab_descripcion) {
 const query = 'UPDATE public.ajustecabecera SET prod_codigo=$2, cab_fecha=$3, cab_descripcion=$4 WHERE cab_codigo =$1;'
     const servers = await inventario.query(query, [cab_codigo, prod_codigo, cab_fecha,cab_descripcion]);   
     return servers.rows;    
 }
async function deleteAjuste(cab_codigo){
    const query = 'DELETE FROM public.ajustecabecera WHERE cab_codigo = $1;'
    const servers = await inventario.query(query, [cab_codigo]);
    return servers.rows;
}
module.exports ={
    consultaAjuste,
    postingresarAjuste,
    ActualizarAjuste,
    deleteAjuste
  
    
}