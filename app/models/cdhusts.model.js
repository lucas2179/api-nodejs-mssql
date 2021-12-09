const { poolPromise } = require('../../config/database')

exports.getStatus = async(cpf,conta) =>{
    const pool = await poolPromise;
    const rs = await pool
            .request()
            .query(`SELECT cdhu_status as Status
                    FROM CDHU_DOCSTATUS 
                    WHERE CPF = '${cpf}' and cdhu_nroconta = '${conta}'`);
    
    return rs.recordset;
}