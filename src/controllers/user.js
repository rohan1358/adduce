const userModel = require('../models/user')
const miscHelper = require('../helper/helper')


module.exports = {
    getUser: (req, res) =>{
        userModel.getUser()
        .then((result) => {
            miscHelper.response(res, result, 200)
            console.log(result[0].name)
        })
        .catch(err => console.log(err));
    },
    userDetail: (req, res) =>{
        const id_user = req.params.id_user;
        userModel.userDetail(id_user)
        .then((result) => {
            res.json(result)
        })
        .catch(err => console.log(err));
    },
    insertUser: (req, res) =>{
        const  {name, id_product, qty} = req.body;
        const data = {
            name,
            id_product,
            qty
        }
        userModel.insertUser(data)
        .then((result) => {
            res.json(result);
        })
        .catch(err => console.log(err));
    },
    updateUser: (req, res) =>{
        const id_user = req.params.id_user;
        const  {qty} = req.body;
        const data = {
            qty 
        }
        userModel.updateUser(id_user, data)
        .then((result) => {
            const resu = res.json(result);
        })
        .catch(err => console.log(err));
    },
}