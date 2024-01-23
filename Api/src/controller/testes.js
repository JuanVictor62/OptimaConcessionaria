import jwt from 'jsonwebtoken';

import { Router } from "express";
const app = Router();

const verificarToken = (req, res, next) => {
  // Obtenha o token do cabeçalho da solicitação
  const token = req.header('Authorization');

  // Verifique se o token está presente
  if (!token) {
    return res.status(401).json({ mensagem: 'Token não fornecido' });
  }

  try {
    // Verifique a validade do token
    const decoded = jwt.verify(token, 'seuSegredo'); // Substitua 'seuSegredo' pelo seu segredo JWT

    // Adicione as informações do usuário ao objeto de solicitação para uso posterior nas rotas
    req.usuario = decoded.usuario;

    // Passe para o próximo middleware ou rota
    next();
  } catch (erro) {
    // Token inválido
    return res.status(401).json({ mensagem: 'Token inválido' });
  }
};

// Exemplo de uso do middleware em uma rota protegida
app.get('/rota-protegida', verificarToken, (req, res) => {
  // A partir deste ponto, você pode acessar as informações do usuário autenticado através de req.usuario
 
});

app.get('/login', (req, res) => {
    res.json({ message: 'login' })
})



export default app