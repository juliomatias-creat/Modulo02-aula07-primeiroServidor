const express = require('express');

const app = express();

const professores = [
    {id: 1, nome: 'Guido', stack: 'Backend'},
    {id: 2, nome: 'Dani', stack: 'Frontend'},
    {id: 3, nome: 'Diego', stack: 'Frontend'},
    {id: 4, nome: 'Vidal', stack: 'Backend'}
];

// localhost:3000/professores
app.get('/professores', (req, res) => {
    
    res.send(professores);
});

app.listen(3000); 