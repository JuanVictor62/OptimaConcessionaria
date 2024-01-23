import { con } from "./connection.js";

import jwt from 'jsonwebtoken';

const secretKey = process.env.SECRET_KEY;


export async function generateToken(id, nome) {
    const payload = {
        id,
        nome
    };
    const options = {
        expiresIn: '120s'
    };
    return jwt.sign(payload, secretKey, options);
}


export async function verifyToken(token) { // True = Válido | False = Expirou
    try {
        const decoded = jwt.verify(token, secretKey);

        return true;
        
    } catch (error) {
        return false;
    }
}


export async function login(nome, senha) {
    const comando = `select 	id_funcionario     id,
                                ds_funcionario     nome
                from   tb_funcionario
                    where  ds_funcionario  = ?
                    and ds_senha     	   =  MD5(?) `
    const [linhas] = await con.query(comando, [nome, senha]);
    return linhas[0];
}


export async function consultLastToken(id) {
    const comando = `   SELECT DS_LASTTOKEN 	'Last Token'
                    FROM TB_FUNCIONARIO 
                        WHERE ID_FUNCIONARIO = ?`
    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}