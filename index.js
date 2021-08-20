const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Oi animal!');
});

app.listen(8080, () =>{
    console.log('Escutamos a porta 8080');
});