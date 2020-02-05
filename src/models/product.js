require('dotenv').config()

const connecttion = require('../configs/db');

module.exports={
    getProduct: () => {
        return new Promise((resolve, reject) => {
            connecttion.query("SELECT product.id, product.name, product.image, product.price, categori.name AS categori FROM product INNER JOIN categori ON product.id_categori = categori.id", (err, result) => {
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
            connecttion.query(`SELECT stock FROM product WHERE id = ${id_product}`, (err, result) => {
                if(!err){
                    resolve(result);console.log(id_product)
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
            connecttion.query("SELECT * FROM product WHRE name LIKE ?", '%' + search + '%', (err, result) => {
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
            connecttion.query(
                `SELECT p.id, p.name, p.image, p.price, p.stock, c.name AS category FROM product p INNER JOIN categori c ON p.id_categori=c.id ORDER BY ${param}`,
                (err, result) => {
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
            connecttion.query("SELECT * FROM product LIMIT ? OFFSET ?",[limit, offset], (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
        
    },
    // INI ADALAH FUNGSI YANG DI PANGGIL OLEH CONTROLLER DAN DI BERIKAN DATA PRODUCT ID DAN STOK
    updateStokProduct : (product_id, stok) => {

        // KITA INGAT TADI PRODUCT ID MENGANDUNG ANGKA YAITU 1 DAN STOK MENGANDUNG ANGKA 5 SESUAI DATA YANG DI KIRIM POSTMAN

        // 1. KITA HARUS TAU QUERY UNTUK UPDATE 
        //  *CONTOH : UPDATE product SET stok='5' WHERE id = '1'
        // 'UPDATE' ADALAH UNTUK MELAKUKAN PRUBAHAN, 'product' ADALAH TABLE YANG AKAN KITA RUBAH ISI DATANYA, 'SET' ADALAH UNTUK MERESET DATA, 'stok' ADALAH NAMA KOLOM YANG AKAN KITA RUBAH, '=5' ADALAH ANGKA STOK YANG AKAN DIRUBAH, 'WHERE' DIMANA YANG AKAN KITA RUBAH, 'id' ADALAH NAMA KOLOM KUNCI DARI PRODUCT, '=1' ADALAH KUNCI DARI DATA YANG AKAN KITA UPDATE 

        // return ADALAH UNTUK MEMBALIKAN PROSES KE CONTROLLER
        return new Promise((resolve, reject) => {
            // STEP DIBAWAH INI ADALAH STEP PROSES UPDATENYA 
            // UPDATE product SET stock=? WHERE id=?
            //  * '?' urutan tanda tanya adalah urutan array, paling depan adalah array ke 0, kedua adalah 1 dst...
            //  *  dari urutan array tanda tanya di atas dipasangkan dengan param ini [stok,product_id]
            //  * maka akan menghasilkan  UPDATE product SET stok='5' WHERE id = '1', karnea variable stok sudah di devinisikan dari awal berdasarkan data dari postman yaitu 5 dan id dari product id=1
            connecttion.query("UPDATE product SET stock=? WHERE id=?", [stok,product_id], (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })

    }
}