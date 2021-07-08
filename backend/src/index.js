const express = require('express');
const cors = require('cors');
const routes =  require('./routes');
const app = express();

app.use(cors());
app.use(express.json()); //informar o uso de JSON nas rotas
app.use(routes);
app.listen(3333);

/** 
 * Métodos HTTP:
 * 
 * GET   : Buscar/Listar alguma informação do back-end
 * POST  : Criar uma informação no back-end
 * PUT   : Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 * 
 */

// Rotas e Recursos 

/** Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o símbolo "?" (Filtros, Paginação)
 * Rote Params : Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */


