const transactionModel = require('../models/TransactionModel')
const moment = require('moment')

const getAllTransaction = async(req,res) => {
    try {
        const {frequency, selectedDate, type} = req.body
        const transactions = await transactionModel.find({
            ...(frequency !== 'custom' ? {
                date:{
                    $gt: moment().subtract(Number(frequency), 'd').toDate(), // d for days
                },
            } : {
                date:{
                    $gte : selectedDate[0],
                    $lte : selectedDate[1]
                },
            }),
        userid: req.body.userid,
        ...(type !== "all" && {type})
    });
        res.status(200).json(transactions)
    } catch (error) {
        console.log(error)
        res.status(500).end().json(error);
    }
}


const addAllTransaction = async(req,res) => {
    try {
        const newTransaction = new transactionModel(req.body)
        await newTransaction.save()
        res.status(200).send('Transaction Added')
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
}

const editTransaction = async(req,res) => {
    try {
        await transactionModel.findOneAndUpdate({_id:req.body.transactionId}, req.body.payload)
        res.status(200).send('Edit Successfully')
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
}

const deleteTransaction = async(req,res) => {
    try {
        await transactionModel.findOneAndDelete({_id:req.body.transactionId})
        res.send('Transaction deleted')
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
}


module.exports = {getAllTransaction, addAllTransaction, editTransaction, deleteTransaction}