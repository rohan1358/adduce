require('dotenv').config()

const connecttion = require('../configs/db');

module.exports={
    getCategory: () => {
        return new Promise((resolve, reject) => {
            connecttion.query("SELECT * FROM categori", (err, result) => {
                if(!err){
                    resolve(result);
                }else {
                    reject(new Error(err));
                }
            })
        })
    },
    categoryDetail: (id_category) => {
        return new Promise((resolve, reject) => {
            connecttion.query("SELECT * FROM categori WHERE id=?", id_category, (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
    insertCategory: (data) => {
        return new Promise((resolve, reject) => {
            connecttion.query("INSERT INTO categori SET ?", data, (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
    updateCategory: (id_category, data) => {
        return new Promise((resolve, reject) => {
            connecttion.query("UPDATE categori SET ? WHERE id = ?",[data, id_category], (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
    deleteCategory: (id_category) => {
        return new Promise((resolve, reject) => {

            connecttion.query(`DELETE FROM categori WHERE id = ${id_category} `, (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
}