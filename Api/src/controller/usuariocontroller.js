import { login } from "../repository/usuarioRepository.js";
import session from "express-session";

import { Router } from "express";
const server = Router();

server.use(session({secret: "aspmd4389m8rfji9jiojias9102", resave: true, saveUninitialized: true}));

// logar no sistema
server.post("/usuario/login", async (req, resp) => {
    try {
        const { nome, senha } = req.body;

        const resposta = await login(nome, senha);

        if (!resposta) { // Validar se o login existe
            throw new Error("Credenciais invalidas");
        }

        req.session.nome = nome;
        resp.redirect("/site3/pageCarros/index.html");


        // resp.send({
        //      id: resposta.id,
        //      nome: resposta.nome
        // });
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})


server.get("/site3/pageCarros", (req, resp) => {
    // if(req.session.login) {
        resp.render("index");
    // } else {
    //     resp.render("index")
    // }
})


export default server;