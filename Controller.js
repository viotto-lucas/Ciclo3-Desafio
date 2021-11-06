const express = require('express');
const cors = require('cors');

const {Sequelize} = require('./models');

const models = require('./models');

const app=express();
app.use(cors());
app.use(express.json());

let cliente= models.Cliente;
let itempedido = models.ItemPedido;
let pedido = models.Pedido;
let servico = models.Servico;
let compra = models.Compra;
let produto = models.Produto;
let itemcompra = models.ItemCompra;

// app.get('/',function(req, res){
//     res.send('Olá, mundo!')
// });

app.post('/servicos', async(req, res) =>{
    await servico.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "Serviço criado com sucesso!"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Foi impossível se conectar."
        })
    });   
});

app.post('/clientes', async(req, res) =>{
    await cliente.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "Cliente criado com sucesso!"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Foi impossível se conectar."
        })
    });   
});

app.post('/pedidos', async(req, res) =>{
    await pedido.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "Pedido criado com sucesso!"
        })
    }).catch(function(erro){
        console.log(erro)
        return res.status(400).json({
            error: true,
            message: "Foi impossível se conectar."
        })
    });   
});

app.post('/itenspedidos', async(req, res) =>{
    await itempedido.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "Item criado com sucesso!"
        })
    }).catch(function(erro){
        console.log(erro)
        return res.status(400).json({
            error: true,
            message: "Foi impossível se conectar."
        })
    });   
});

app.post('/compras', async(req, res) =>{
    await compra.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "Compra criada com sucesso!"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Foi impossível se conectar."
        })
    });   
});

app.post('/produtos', async(req, res) =>{
    await produto.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "Produto criado com sucesso!"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Foi impossível se conectar."
        })
    });   
});

app.post('/itenscompras', async(req, res) =>{
    await itemcompra.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "Item criado com sucesso!"
        })
    }).catch(function(erro){
        console.log(erro)
        return res.status(400).json({
            error: true,
            message: "Foi impossível se conectar."
        })
    });   
});

app.get('/listaservicos', async(req, res)=>{
    await servico.findAll({
        //raw: true
        order: [['nome', 'ASC']]
    }).then(function(servicos){
        res.json({servicos})
    });
});

app.get('/listaclientes', async(req, res)=>{
    await cliente.findAll({
        raw: true
    }).then(function(clientes){
        res.json({clientes})
    });
});

app.get('/listapedidos', async(req, res)=>{
    await pedido.findAll({
        raw: true
    }).then(function(pedidos){
        res.json({pedidos})
    });
});

app.get('/listaitempedidos', async(req, res)=>{
    await itempedido.findAll({
        raw: true
    }).then(function(itempedidos){
        res.json({itempedidos})
    });
});

app.get('/listaprodutos', async(req, res)=>{
    await produto.findAll({
        order: [['nome', 'ASC']]
    }).then(function(produtos){
        res.json({produtos})
    });
});

app.get('/listacompras', async(req, res)=>{
    await compra.findAll({
        raw: true
    }).then(function(compras){
        res.json({compras})
    });
});

app.get('/listaitemcompras', async(req, res)=>{
    await itemcompra.findAll({
        raw: true
    }).then(function(itemcompras){
        res.json({itemcompras})
    });
});

app.get('/ofertaservicos', async(req,res)=>{
    await servico.count('id').then(function(servicos){
        res.json({servicos});
    });
});

app.get('/ofertaclientes', async(req,res)=>{
    await cliente.count('id').then(function(clientes){
        res.json({clientes});
    });
});

app.get('/ofertapedidos', async(req,res)=>{
    await pedido.count('id').then(function(pedidos){
        res.json({pedidos});
    });
});

app.get('/ofertaprodutos', async(req,res)=>{
    await produto.count('id').then(function(produtos){
        res.json({produtos});
    });
});

app.get('/ofertacompras', async(req,res)=>{
    await compra.count('id').then(function(compras){
        res.json({compras});
    });
});

app.get('/servico/:id', async(req, res)=>{
    await servico.findByPk(req.params.id)
    .then(serv =>{
        return res.json({
            error: false,
            serv
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro: não foi possível conectar!"
        });
    });
});

app.get('/cliente/:id', async(req, res)=>{
    await cliente.findByPk(req.params.id)
    .then(client =>{
        return res.json({
            error: false,
            client
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro: não foi possível conectar!"
        });
    });
});

app.get('/pedido/:id', async(req, res)=>{
    await pedido.findByPk(req.params.id)
    .then(ped =>{
        return res.json({
            error: false,
            ped
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro: não foi possível conectar!"
        });
    });
});

app.get('/produto/:id', async(req, res)=>{
    await produto.findByPk(req.params.id)
    .then(prod =>{
        return res.json({
            error: false,
            prod
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro: não foi possível conectar!"
        });
    });
});

app.get('/compra/:id', async(req, res)=>{
    await compra.findByPk(req.params.id)
    .then(comp =>{
        return res.json({
            error: false,
            comp
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro: não foi possível conectar!"
        });
    });
});

app.get('/pedidos/:id', async(req, res)=>{
    await pedido.findByPk(req.params.id,{include:[{all: true}]})
    .then(ped=>{
        return res.json({ped});
    })
})

app.get('/compras/:id', async(req, res)=>{
    await compra.findByPk(req.params.id,{include:[{all: true}]})
    .then(comp=>{
        return res.json({comp});
    })
})

app.put('/pedidos/:id/editaritem', async(req, res)=>{
    const item={
        quantidade: req.body.quantidade,
        valor: req.body.valor
    };

    if (!await pedido.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            message: 'Pedido não foi encontrado.'
        });
    };

    if (!await servico.findByPk(req.body.ServicoId)){
        return res.status(400).json({
            error: true,
            message: 'Serviço não foi encontrado.'
        });
    };

    await itempedido.update(item, {
        where: Sequelize.and({ServicoId: req.body.ServicoId},
            {PedidoId: req.params.id})
    }).then(function(itens){
        return res.json({
            error: false,
            message: "Pedido alterado com sucesso!",
            itens
        });
    }).catch(function(erro){
        return res.status(400).json({
            error : true,
            message: "Erro: não foi possível alterar."
        });
    });
});

app.put('/compras/:id/editaritem', async(req, res)=>{
    const item={
        quantidade: req.body.quantidade,
        valor: req.body.valor
    };

    if (!await compra.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            message: 'Compra não foi encontrada.'
        });
    };

    if (!await produto.findByPk(req.body.ProdutoId)){
        return res.status(400).json({
            error: true,
            message: 'Produto não foi encontrado.'
        });
    };

    await itemcompra.update(item, {
        where: Sequelize.and({ProdutoId: req.body.ProdutoId},
            {CompraId: req.params.id})
    }).then(function(itens){
        return res.json({
            error: false,
            message: "Compra alterada com sucesso!",
            itens
        });
    }).catch(function(erro){
        return res.status(400).json({
            error : true,
            message: "Erro: não foi possível alterar."
        });
    });
});

app.put('/atualizaservico', async(req,res)=>{
    await servico.update(req.body,{
        where:{id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Serviço foi alterado com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message: "Erro na alteração do serviço."
        });
    });
});

app.put('/atualizaproduto', async(req,res)=>{
    await produto.update(req.body,{
        where:{id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Produto foi alterado com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message: "Erro na alteração do produto."
        });
    });
});

app.get('/excluircliente/:id', async(req, res)=>{
    await cliente.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cliente foi excluído com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro ao excluir o cliente."
        });
    });
});

app.get('/excluirpedido/:id', async(req, res)=>{
    await pedido.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Pedido foi excluído com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro ao excluir o pedido."
        });
    });
});

app.get('/excluirservico/:id', async(req, res)=>{
    await servico.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Serviço foi excluído com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro ao excluir o serviço."
        });
    });
});

app.get('/excluircompra/:id', async(req, res)=>{
    await compra.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Compra foi excluída com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro ao excluir a compra."
        });
    });
});

app.get('/excluirproduto/:id', async(req, res)=>{
    await produto.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Produto foi excluído com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro ao excluir o produto."
        });
    });
});

let port=process.env.PORT || 3001;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo: http://localhost:3001');
})