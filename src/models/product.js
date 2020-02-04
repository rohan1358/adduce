require('dotenv').config()

const connecttion = require('../configs/db');

module.exports={
    getProduct: () => {
        return new Promise((resolve, reject) => {
            connecttion.query("SELECT product.id, product.name, product.image, product.price, categori.name AS categori FROM product INNER JOIN categori ON product.id_categori = categori.id ORDER BY update", (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
    productDetail: (id_product) => {
        return new Promise((resolve, reject) => {
            connecttion.query("SELECT product.*, categori.name AS category FROM product INNER JOIN categori ON product.id_categori = categori.id WHERE product.id=?", id_product, (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
    insertProduct: (data) => {
        return new Promise((resolve, reject) => {
            connecttion.query("INSERT INTO product SET ?", data, (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
    updateProduct: (id_product, data) => {
        return new Promise((resolve, reject) => {
            connecttion.query("UPDATE product SET ? WHERE id = ?",[data, id_product], (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
    deleteProduct: (id_product) => {
        return new Promise((resolve, reject) => {
            connecttion.query("DELETE FROM product WHERE id=?", id_product, (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
    searchProduct: (search) => {
        return new Promise((resolve, reject) => {
            connecttion.query("SELECT * FROM product WHERE name LIKE ?", '%' + search + '%', (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
    sortProduct: (param) => {
        return new Promise((resolve, reject) => {
            connecttion.query(`SELECT product.id, product.name,product.image, product.price, product.stock AS stock, categori.name AS category FROM product INNER JOIN user ON product.id=user.id_product INNER JOIN categori ON product.id_categori=categori.id ORDER BY ${param}`, (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
    limitProduct: (data)=>{
        var limit = parseInt(data.limit)
        var offset = parseInt(data.offset)
        return new Promise((resolve, reject) => {
            connecttion.query("SELECT * FROM product LIMIT ? OFFSET ?", id_product, (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
        
    }
}