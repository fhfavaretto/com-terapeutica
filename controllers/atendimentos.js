module.exports = app => {
    //rota  get 
    app.get('/atendimentos', (req, res) => res.send('funcionando um get'))

    app.post('/atendimentos', (req, res) =>{
     console.log(req.body)
     res.send('vc esta na rota de atendimentos e esta recebedo um post')
    })
}

