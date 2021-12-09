const { poolPromise } = require('../../config/database')

exports.getBoleto = async(cpf) =>{
    const pool = await poolPromise;
    const rs = await pool
            .request()
            .query(`SELECT ren_boletopagamento as URLBOLETO
                    FROM CNH_REN 
                    WHERE CPF = '${cpf}'`);
    
    return rs.recordset;
}