const orderModel = require('../models/order')
const miscHelper = require('../helper/helper')


module.exports = {
    pageOrder:(req, res)=>{
        const  {page} = req.query;
        const data = {
            page
        }
        orderModel.pageOrder(data)
        .then((result)=>{
            res.json(result);
        })
    },
    getOrder: (req, res) =>{
        orderModel.getOrder()
        .then((result) => {
            res.json(result);
        })
        .catch(err => console.log(err));
    },
    orderDetail: (req, res) =>{
        const id_order = req.params.id_order;
        orderModel.orderDetail(id_order)
        .then((result) => {
            res.json(result)
        })
        .catch(err => console.log(err));
    },
    // sortOrder: (req, res) =>{
    //     orderModel.sortOrder()
    //     .then((result) => {
    //         res.json(result);
    //     })
    //     .catch(err => console.log(err));
    // },
    insertOrder: (req, res) =>{
    // // KALAU LINK ITU DI HIT ATAU DI KLIK DAN ADA DATANYA
    // console.log(req.body) //console ini buat liat datanya

    // // Pasangkan data berdasarkan Key nya dari body request

    // // Tampung kedalam varible data untuk di kirim ke model
    const idProduct = req.body.product_id;
    const quant = req.body.qty;
    // /*
    //     variable data mengandung 
    //     {
    //         product_id = 1 dan stok = 3
    //     }
    //     DATA INI DARI POSTMAN
    // */
    // // INI STEP BUAT PINDAH FILE UNTUK PROSES INSERT DAN UPDATE STOK
    orderModel.insertOrder(idProduct, quant)

        .then((result) => {
            res.json(result)
        })
        .catch(err => console.log(err));
    },
}