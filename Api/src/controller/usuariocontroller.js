import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import { generateToken, login } from "../repository/usuarioRepository.js";

import { Router } from "express";
const server = Router();

server.use(cookieParser())

const secretKey = process.env.SECRET_KEY

// middleware para o token
const verifyToken = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
      return res.redirect('/login');
    }

    try {
      const decoded = jwt.verify(token, secretKey);
      next()
    } catch (erro) {
      return res.redirect('/login'); // caso haja o token mas não seja válido
    }
  };

server.get('/pageCarros', verifyToken, (req, resp) => {
    resp.send({ message: 'Token válido' })
})

server.get('/login', (req, resp) => {
    resp.send({Message: "Login"})
})

//! logar no sistema
server.post("/login", async (req, resp) => {
    try {
        const { nome, senha } = req.body;

        const resposta = await login(nome, senha);

        if (!resposta) { //! Validar se o login existe
            throw new Error("Credenciais invalidas");
        }
        
        let token = await generateToken(resposta.id, resposta.nome);
        resp.cookie('token', token, { httpOnly: true, maxAge: 120000 });

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

export default server;