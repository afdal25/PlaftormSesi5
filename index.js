const express = require('express');
const app = express();
const port = 3000;

const Persegi = require('./module/calculate.js');

app.get('/Persegi/luas/:number', (req, res) => {
    const sisi = parseFloat(req.params.number);
    const luas = Persegi.luasPersegi(sisi);
    res.send('Sisi persegi: ' + sisi + '<br>Luas persegi: ' + luas);
});


app.get('/',(req,res) => {
    res.send('hello world!')
});

app.listen(port, () => {
    console.log('server menyala di localhost' + port)
});