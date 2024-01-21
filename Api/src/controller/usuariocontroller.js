import { login } from "../repository/usuarioRepository.js"

import { Router } from "express";
const server = Router();

// logar no sistema
server.post('/usuario/login', async (req, resp) => {
    try {
        const { nome, senha } = req.body;

        const resposta = await login(nome, senha);
        if (!resposta) {
            throw new Error("Credenciais invalidas");
        }
        resp.send({
            id: resposta.id,
            nome: resposta.nome
        });
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})


export default server;