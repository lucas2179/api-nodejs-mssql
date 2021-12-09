const { poolPromise } = require('../../config/database')

exports.create = async (date, protocolo) => {
    const pool = await poolPromise;
     
    const rs = await pool
        .request()
        .query(`INSERT INTO CNH_REN (cpf, cnh_nro, ren_protocolo)
                VALUES ('${date.cpf}', '${date.cnh_nro}', '${protocolo}') `)

    return rs.rowsAffected;
}

exports.read = async () => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`SELECT cpf as CPF, nome as Nome, ren_desc as Descricao, cnh_nro as CNH, ren_situacao as Situacao, ren_data as Data, ren_protocolo as Procotolo, ren_statusservico as StatusServico, ren_status as Status, ren_boletopagamento as Boleto
                FROM CNH_REN`)

    return rs.recordset;
}

exports.readByCpf = async(cpf) =>{
    const pool = await poolPromise;
    const rs = await pool
            .request()
            .query(`SELECT ren_status as Status, nome as Nome, ren_situacao as Situacao, ren_data as Data, ren_protocolo as Procotolo
                    FROM CNH_REN 
                    WHERE CPF = '${cpf}' `);
    
    return rs.recordset;
}


// const rs = await pool
//         .request()
//         .query(`INSERT INTO person (name)
//                 VALUES ('${date.name}')`)