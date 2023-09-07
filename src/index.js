const express = require('express');
require('dotenv').config()
const app = express();


app.get('/', (req, res)=> {
    res.status(200).json({mensagem: 'Tudo certo com a api'})
})



app.listen(process.env.PORT,()=>{
    console.log(`O servidor iniciou na porta ${process.env.PORT}`)
})