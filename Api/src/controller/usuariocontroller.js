import { consultLastToken, generateToken, login, verifyToken } from "../repository/usuarioRepository.js";

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


server.post('/usuario/login/token', async (req, resp) => {
    try {
        const { id } = req.body;
        const resposta = await consultLastToken(id);
        
        if (!resposta) {
            throw new Error("Token não localizado");
        }

        resp.send(resposta);

    } catch (error) {
        console.log(error)
    }
})


export default server;