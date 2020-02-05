require('dotenv').config()

const connecttion = require('../configs/db');

module.exports={
    pageOrder:(data)=>{
        return new Promise((resolve, reject) => {
        const batas = parseInt(data.page)
        const limit = 3
        const index = limit*(batas - 1)
            connecttion.query("SELECT * FROM tbl_order LIMIT ? OFFSET ?",[limit, index], (err, result)=>{
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
    getOrder: () => {
        return new Promise((resolve, reject) => {
            connecttion.query("SELECT * FROM tbl_order", (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
    orderDetail: (id_order) => {
        return new Promise((resolve, reject) => {
            connecttion.query("SELECT * FROM tbl_order WHERE id=?", id_order, (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
    insertOrder:(idProduct, quant, user)=>{
        return new Promise((resolve, reject) =>{
            connecttion.query("INSERT INTO tbl_order (qty, product_id,user_id) VALUES (?,?,?)", [quant, idProduct, user], (err, result) =>{
                if(!err){
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
                connecttion.query('UPDATE product INNER JOIN tbl_order ON product.id=tbl_order.product_id  SET product.stock=product.stock-tbl_order.qty')
                
            })
        })
    },





   
    sortOrder: () => {
        return new Promise((resolve, reject) => {
            connecttion.query("SELECT * FROM tbl_order", (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
}