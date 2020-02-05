const checkoutModel = require('../models/checkout')
const miscHelper = require('../helper/helper')

// kontroller checkout
module.exports = {
    checkoutOrder: (req, res) =>{
        const  id_order = req.body.id_order;
        checkoutModel.checkoutOrder(id_order)
        .then((result) => {
            res.json(result);
        })
        .catch(err => console.log(err));
    },
}