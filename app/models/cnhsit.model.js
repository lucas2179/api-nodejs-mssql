const { poolPromise } = require('../../config/database')

exports.read = async () => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`SELECT *
                FROM CNH_SIT`)

    return rs.recordset;
}

exports.readByCpfandCnhNro = async(cpf,cnh_nro) =>{
    const pool = await poolPromise;
    const rs = await pool
            .request()
            .query(`SELECT CNH_Status as Situacao
                    FROM CNH_SIT 
                    WHERE CPF = '${cpf}' AND CNH_NRO = '${cnh_nro}' `);
    
    return rs.recordset;
}
