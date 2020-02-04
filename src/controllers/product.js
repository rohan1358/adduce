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
        const  {name, price, id_categori} = req.body;
        const data = {
            name,
            price,
            id_categori 
        }
        productModel.insertProduct(data)
        .then((result) => {
            res.json(result);
        })
        .catch(err => console.log(err));
    },
    updateProduct: (req, res) =>{
        const id_product = req.params.id_product;
        const  {name, price, id_categori} = req.body;
        const data = {
            name,
            image: `http://localhost:8080/upload/${req.file.filename}`,
            price,
            id_categori 
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
}