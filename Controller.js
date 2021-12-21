const express = require('express');
const cors = require('cors');

const {Sequelize} = require('./models');

const models = require('./models');
const { response } = require('express');

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
        raw:true
        // order: [['nome', 'ASC']]
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

app.get('/servico/:id/pedidos', async(req, res)=>{
    await itempedido.findAll({
        where: {PedidoId: req.params.id}})
    .then(item =>{
        return res.json({
            error: false,
            item
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro: não foi possível conectar!"
        });
    });
});

app.get('/produto/:id/compras', async(req, res)=>{
    await itemcompra.findAll({
        where: {CompraId: req.params.id}})
    .then(item =>{
        return res.json({
            error: false,
            item
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro: não foi possível conectar!"
        });
    });
});

app.get('/clientes/:id', async(req, res)=>{
    await cliente.findByPk(req.params.id)
    .then(client =>{
        console.log('CLIENTE', client)
        const resp = client.dataValues
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

app.get('/item-pedido/:id', async(req, res)=>{
    await itempedido.findByPk(req.params.id)
    .then(itemped =>{
        return res.json({
            error: false,
            itemped
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro: não foi possível conectar!"
        });
    });
});

app.get('/item-compra/:id', async(req, res)=>{
    await itemcompra.findByPk(req.params.id)
    .then(itemcomp =>{
        return res.json({
            error: false,
            itemcomp
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
    await pedido.findByPk(req.params.id)
    .then(ped=>{
        return res.json(ped.dataValues);
    })
})

app.get('/servicos/:id', async(req, res)=>{
    await servico.findByPk(req.params.id)
    .then(serv=>{
        return res.json(serv.dataValues);
    })
})

// app.get('/compras/:id', async(req, res)=>{
//     await compra.findByPk(req.params.id,{include:[{all: true}]})
//     .then(comp=>{
//         return res.json({comp});
//     })
// })

app.get('/compras/:id', async(req, res)=>{
    await compra.findByPk(req.params.id)
    .then(comp=>{
        return res.json(comp.dataValues);
    })
})

app.get('/produtos/:id', async(req, res)=>{
    await produto.findByPk(req.params.id)
    .then(prod=>{
        return res.json(prod.dataValues);
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

app.put('/pedidos/:id', async(req, res)=>{
    const ped={
        data: req.body.data,
        ClienteId: req.body.ClienteId
    };
    if (!await cliente.findByPk(req.body.ClienteId)){
        return res.status(400).json({
            error: true,
            message: 'Cliente não foi encontrado.'
        });
    };
    if (!await pedido.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            message: 'Pedido não foi encontrado.'
        });
    };
    await pedido.update(ped, {
        where: Sequelize.and(
            {id: req.params.id})
    }).then(pedidos =>{
        return res.json({
            error: false,
            message: "Pedido alterado com sucesso!",
            pedidos
        });
    }).catch(function(erro){
        return res.status(400).json({
            error : true,
            message: "Erro: não foi possível alterar."
        });
    });
});

app.put('/clientes/:id', async(req, res)=>{
    console.log('BODY',req.body)
    console.log('ID CLIENTE',req.params.id)
    const client={
        nome: req.body.nome,
        endereco: req.body.endereco,
        cidade: req.body.cidade,
        UF: req.body.uf,
        nascimento: req.body.nascimento,
        clienteDesde: req.body.clienteDesde
    };
    console.log('ERROR', client)
    if (!await cliente.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            message: 'Cliente não foi encontrado.'
        });
    };
    await cliente.update(client, {
        where: Sequelize.and(
            {id: req.params.id})
    }).then(clientes =>{
        return res.json({
            error: false,
            message: "Cliente alterado com sucesso!",
            clientes
        });
    }).catch(function(erro){
        return res.status(400).json({
            error : true,
            message: "Erro: não foi possível alterar."
        });
    });
});

app.put('/servicos/:id', async(req, res)=>{
    console.log('BODY',req.body)
    console.log('ID CLIENTE',req.params.id)
    const serv={
        nome: req.body.nome,
        descricao: req.body.descricao
    };
    console.log('ERROR', serv)
    if (!await servico.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            message: 'Serviço não foi encontrado.'
        });
    };
    await servico.update(serv, {
        where: Sequelize.and(
            {id: req.params.id})
    }).then(servicos =>{
        return res.json({
            error: false,
            message: "Serviço alterado com sucesso!",
            servicos
        });
    }).catch(function(erro){
        return res.status(400).json({
            error : true,
            message: "Erro: não foi possível alterar."
        });
    });
});

app.put('/compras/:id', async(req, res)=>{
    console.log('BODY',req.body)
    console.log('ID CLIENTE',req.params.id)
    const comp={
        data: req.body.data,
        ClienteId: req.body.ClienteId
    };
    console.log('ERROR', comp)
    if (!await compra.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            message: 'Compra não foi encontrada.'
        });
    };
    await compra.update(comp, {
        where: Sequelize.and(
            {id: req.params.id})
    }).then(compras =>{
        return res.json({
            error: false,
            message: "Compra alterada com sucesso!",
            compras
        });
    }).catch(function(erro){
        return res.status(400).json({
            error : true,
            message: "Erro: não foi possível alterar."
        });
    });
});

app.put('/produtos/:id', async(req, res)=>{
    console.log('BODY',req.body)
    console.log('ID CLIENTE',req.params.id)
    const prod={
        nome: req.body.nome,
        descricao: req.body.descricao
    };
    console.log('ERROR', prod)
    if (!await produto.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            message: 'Produto não foi encontrado.'
        });
    };
    await produto.update(prod, {
        where: Sequelize.and(
            {id: req.params.id})
    }).then(produtos =>{
        return res.json({
            error: false,
            message: "Produto alterado com sucesso!",
            produtos
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

app.get('/excluiritempedido/:id', async(req, res)=>{
    await itempedido.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Item do pedido foi excluído com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro ao excluir item do pedido."
        });
    });
});

app.get('/excluiritemcompra/:id', async(req, res)=>{
    await itemcompra.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Item da compra foi excluído com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro ao excluir item da compra."
        });
    });
});

app.get('/cliente/:id/pedidos', async(req,res)=>{
    await pedido.findAll({
        where: {ClienteId : req.params.id}
    })
    .then(ped=>{
        return res.json({
            error: false,
            ped
        });
    }).catch(erro =>{
        return res.status(400).json({
            error:true,
            message: "Não foi possível retornar pedidos."
        });
    });
});

app.get('/cliente/:id/compras', async(req,res)=>{
    await compra.findAll({
        where: {ClienteId : req.params.id}
    })
    .then(comp=>{
        return res.json({
            error: false,
            comp
        });
    }).catch(erro =>{
        return res.status(400).json({
            error:true,
            message: "Não foi possível retornar pedidos."
        });
    });
});

let port=process.env.PORT || 3001;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo: http://localhost:3001');
})