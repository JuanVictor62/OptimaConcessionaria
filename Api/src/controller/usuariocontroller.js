import { generateToken, login, verifyToken } from "../repository/usuarioRepository.js";

import { Router } from "express";
const server = Router();

//! logar no sistema
server.post("/usuario/login", async (req, resp) => {
    try {
        const { nome, senha } = req.body;

        const resposta = await login(nome, senha);

        if (!resposta) { //! Validar se o login existe
            throw new Error("Credenciais invalidas");
        }
        
        let token = await generateToken(resposta.id, resposta.nome);
        await verifyToken(token);

        resp.send({
             id: resposta.id,
             nome: resposta.nome,
             token: token
        });

    } catch (err) { 
        resp.status(401).send({
            erro: err.message
        });
    }
})


//! Verificar se o Token expirou
server.post("/usuario/login/validToken", async (req, resp) => {
    try {

        const { token } = req.body;

        let tokenIsValid = await verifyToken(token);

        if (!tokenIsValid) { // Token não existe
            throw new Error("Invalid Token");
        }

        resp.send(true);

    } catch (error) {
        resp.status(401).send({
            error: error.message
        });
    }
})

export default server;