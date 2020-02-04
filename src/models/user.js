require('dotenv').config()

const connecttion = require('../configs/db');

module.exports={
    getUser: () => {
        return new Promise((resolve, reject) => {
            connecttion.query("SELECT * FROM user", (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
    userDetail: (id_user) => {
        return new Promise((resolve, reject) => {
            connecttion.query("SELECT user.*, user.qty*product.price AS total FROM user INNER JOIN product ON user.id_product=product.id WHERE user.id=?", id_user, (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
    updateUser: (id_user, data) => {
        return new Promise((resolve, reject) => {
            connecttion.query("UPDATE user SET ? WHERE id = ?",[data, id_user], (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
}