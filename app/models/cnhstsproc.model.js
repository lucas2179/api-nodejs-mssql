const { poolPromise } = require('../../config/database')

exports.read = async () => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`SELECT *
                FROM CNH_REN`)

    return rs.recordset;
}

exports.readByCpfandCnhNro = async(cpf,cnh_nro) =>{
    const pool = await poolPromise;
    const rs = await pool
            .request()
            .query(`SELECT nome as Nome, ren_desc as Descricao, ren_situacao as Situacao, ren_data as Data, ren_protocolo as Protocolo
                    FROM CNH_REN 
                    WHERE CPF = '${cpf}' AND CNH_NRO = '${cnh_nro}' `);
    
    return rs.recordset;
}