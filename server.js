const express = require('express');
const app = express();
app.use(express.json());
app.use("/app", express.static("./client"));

const lancamentos = [

    { mes: "janeiro", categoria: "Salário", tipo: "receita", valor: 3000},
    { mes: "janeiro", categoria: "Aluguel", tipo: "despesa", valor: 1000},
    { mes: "janeiro", categoria: "Conta de Luz", tipo: "despesa", valor: 200},
    { mes: "janeiro", categoria: "Conta de Água", tipo: "despesa", valor: 100},
    { mes: "janeiro", categoria: "Internet", tipo: "despesa", valor: 100},
    
    { mes: "fevereiro", categoria: "Salário", tipo: "receita", valor: 3000},
    { mes: "fevereiro", categoria: "Aluguel", tipo: "despesa", valor: 1200},
    { mes: "fevereiro", categoria: "Conta de Luz", tipo: "despesa", valor: 250},
    { mes: "fevereiro", categoria: "Conta de Água", tipo: "despesa", valor: 100},
    { mes: "fevereiro", categoria: "Internet", tipo: "despesa", valor: 100},

    { mes: "março", categoria: "Salário", tipo: "receita", valor: 4000},
    { mes: "março", categoria: "Aluguel", tipo: "despesa", valor: 1200},
    { mes: "março", categoria: "Conta de Luz", tipo: "despesa", valor: 200},
    { mes: "março", categoria: "Conta de Água", tipo: "despesa", valor: 100},
    { mes: "março", categoria: "Internet", tipo: "despesa", valor: 200},

    { mes: "abril", categoria: "Salário", tipo: "receita", valor: 4000}
];

// leio
app.get("/api/lancamentos", function (req, res) {
    res.json(lancamentos);
});

// escrevo
app.post("/api/lancamentos", function (req, res) {
    const lancamento = req.body;
    lancamentos.push(lancamento);
    res.end();
});

app.listen(3000);