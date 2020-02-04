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
    



    insertOrder: (idProduct, quant) => {
    //     // VARIABLE DATA ITU SAMA AJA LEMPARAN DARI SEBELUMNYA
    //     /*
    //         variable data mengandung 
    //         {
    //             product_id = 1 dan stok = 3
    //         }

    //         cara ambil nya dengan data.product_id
    //     */

    //     // AMBIL SATU DATA DARI DATABASE table PRODUCT DENGAN PRODUCT ID YANG DI KIRIM DARI POSTMAN DAN AMBIL STOK NYA
    //     // TUJUANNYA UNTUK AMBIL STOK NYA AJA BUAT DI KURANGI DENGAN DATA DARI QTY POSTMAN TADI
        return new Promise((resolve, reject) =>{
            let hasil =connecttion.query("SELECT * FROM product WHERE id =?", idProduct)
                
              
                
                 
                
                    connecttion.query("UPDATE product SET stock=? WHERE id = ?", [quant, idProduct], (err, result) => {
                        if(!err){
                           resolve(result);
                        }else{
                            reject(new Error(err));
                        }
                    })
                
                //JIKA NGGK ERROR

    //             // VARIABLE result itu Mengandung DATA HASIL SELECT

    //             /*
    //                 DISINI ADALAH HASIL QUERYNYA BERBENTUK ARRAY DAN UTK AMBIL 1 DATA MENGGUNAKAN result[0].nama_kolom_table

    //                 KALAU result[0].stok BERARTI ITU AMBIL DATA STOK NYA, MAKA MENGANDUNG ANGKA
    //             */
                
    //             // HASIL DARI AMBIL DATA ARRAY KE 0 DIKURANGI DENGAN qty DATA DARI PORSTMAN DAN MASUKAN KE VARIABLE STOKNYA
    //DISINI BIKIN VARIABEL stock DIMANA (result[0].stock) dari database dan (data.qty) adalah dari postman, dikurangi maka hasilnya sesuai yang dikurangi
    //             // LALU UPDATE TABLE PRODUCT DIMANA STOK NYA YANG SUDAH DI KURAGI DAN KOLOM ID PADA PRODUCT YANG SESUAI DARI POSTMAN, stok nya menjadi stok database dikurang stok dari data postman

    //         // INSERT KE TABLE ORDER
            connecttion.query("INSERT INTO tbl_order SET ?", quant,(err, result) => {
                if(!err){
                    connecttion.query("UPDATE product SET stock(SELECT (product.stock-tbl_order.qty) FROM product INNER JOIN tbl_order on product.id=tbl_order.product_id) WHERE id = ?", idProduct)
                }else{
                    reject(new Error(err));
                }
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