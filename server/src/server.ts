import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

//O cors permite que aplicações em endereços diferentes, por exemplo:
//Frontend está no localhost:3000 acesse o Backend (API) no localhost:3333

app.use(cors());
app.use(express.json());

//http://localhost:3333/users
//O que vem no endereço até a barra é rota
//O que vem depois da rota é o recurso: /users

//GET: Buscar informações
//POST: Criar alguma nova informação
//PUT: Atualizar informação existente
//DELETE: Deletar uma informação existente

//Parâmetros:
//Corpo da requisição (Request Body): criação ou atualização de um registro
//Route Params: identificar qual recurso eu quero atualizar ou deletar (/users/:id)
//Query Params: quanado quiser fazer paginação, lista, ordenação, filtros

app.use(routes);

//Esperando uma requisição. Coloquei na localhost:3333
app.listen(3333);