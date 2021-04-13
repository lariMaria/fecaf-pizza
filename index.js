const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');

const port = process.env.PORT || config.get('server.port');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));   
app.set('port', port);

const listaPizzas = [
    {cliente: "João Silva", sabor: "Mussarela", quantidade: 2, tamanho: "grande"}
];

app.route('/pedidos').get( (req, res)=>{
    res.status(200).json(listaPizzas);
});

app.route('/pedido/adicionar').post( (req, res)=> { 
    const pedido = req.body;
    listaPizzas.push(pedido);
    res.status(200).send("Ok");
})

app.listen(port, () => { 
    console.log("Servidor está iniciado na porta ", port);
})