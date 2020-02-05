const productModel = require('../models/product')
const miscHelper = require('../helper/helper')


module.exports = {
    getProduct: (req, res) =>{
        productModel.getProduct()
        .then((result) => {
            miscHelper.response(res, result, 200)
        })
        .catch(err => console.log(err));
    },
    productDetail: (req, res) =>{
        const id_product = req.params.id_product;
        productModel.productDetail(id_product)
        .then((result) => {
            res.json(result)
        })
        .catch(err => console.log(err));
    },
    insertProduct: (req, res) =>{
        const  {name, price, id_categori, stock} = req.body;
        const data = {
            name,
            price,
            id_categori,
            stock
        }
        productModel.insertProduct(data)
        .then((result) => {
            res.json(result);
        })
        .catch(err => console.log(err));
    },
    updateProduct: (req, res) =>{
        const id_product = req.params.id_product;
        const  {name, price, id_categori, stock} = req.body;
        const data = {
            name,
            image: `http://localhost:8080/upload/${req.file.filename}`,
            price,
            id_categori,
            stock
        }
        productModel.updateProduct(id_product, data)
        .then((result) => {
            res.json(result);
        })
        .catch(err => console.log(err));
    },
    deleteProduct: (req, res) =>{
        const id_product = req.params.id_product;
        productModel.deleteProduct(id_product)
        .then((result) => {
            res.json(result);
        })
        .catch(err => console.log(err));
    },
    searchProduct: (req, res) =>{
        const search = req.params.search;
        productModel.searchProduct(search)
        .then((result) => {
            res.json(result);
        })
        .catch(err => console.log(err));
    },
    sortProduct: (req, res) =>{
        const param = req.params.param;
        productModel.sortProduct(param)
        .then((result) => {
            res.json(result);
        })
        .catch(err => console.log(err));
    },

    // FUNGSI updateStok DISINI ADALAH AWAL MULAI PROSES DARI UPDATE STOK
    updateStok: (req, res) => { //link tadi akan eksekusi controller sesuai dengan namanya 

        const {product_id, stok} = req.body //BACA STEP NO 4 PRODUCT ID UNTUK APA STOK UNTUK APA 

        // SETELAH DIPASANGKAN KITA AKAN DENGAN MUDAH MEMPEROSES DATANYA
        console.log(product_id) //INI MENGANDUNG ANGKA SESUAI DATA DARI POSTMAN (1) *contoh
        console.log(stok) //INI MENGANDUNG ANGKA SESUAI DATA DARI POSTMAN (5) *contoh

        // SETELAH DAPET KUNCI PRODUCT ID DAN STOK YANG AKAN DI UPDATE, KITA PROSES KAN KEDATABASE LEWAT MODEL
        productModel.updateStokProduct(product_id, stok) //updateStokProduct Akan Mengirimkan Data updateStokProduct(product_id = 1, stok = 5) *buat model pada product
        .then((result) => {
            res.json(result);
        })
        .catch(err => console.log(err));


    },
}