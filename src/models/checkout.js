require('dotenv').config()

const connecttion = require('../configs/db');

module.exports = {
    checkoutOrder: (id_order) => {
        return new Promise((resolve, reject) => {
            connecttion.query("INSERT INTO checkout SET id_order = ?", id_order, (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
            connecttion.query(
                `UPDATE product 
                INNER JOIN tbl_order ON product.id=tbl_order.product_id
                INNER JOIN checkout ON tbl_order.id = checkout.id_order
                SET product.stock=product.stock-tbl_order.qty
                WHERE checkout.id_order = ${id_order}`,
                (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
            connecttion.query("DELETE tbl_order FROM tbl_order JOIN checkout ON checkout.id_order=tbl_order.id", (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
}