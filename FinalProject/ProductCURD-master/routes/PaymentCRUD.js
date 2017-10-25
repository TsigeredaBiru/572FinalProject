const express = require('express');
const router = express.Router();
const paymentDB = require('../model/payment');

router.route('/')
    .get(function (req, res) {
        paymentDB.find(function(err,payment){
        	if(err) throw err;
        	res.json(payment);
        });
    })
    .post(function (req, res) {
        const newpayment = req.body;
        payment=new paymentDB(newpayment);
        payment.save();
        res.json(newpayment);
    })

router.route('/:id')
    .put(function (req, res) {
        paymentDB.findOneAndUpdate({'id':req.params.id},req.body,function(err,payment){
        	if(err) throw err;
        });
        res.json('OK');
    })
    .delete(function(req,res){
        paymentDB.findOneAndRemove({'id':req.params.id},function(err,payment){
        	if(err) throw err;
        })
        res.json('OK');	
    })
module.exports = router;