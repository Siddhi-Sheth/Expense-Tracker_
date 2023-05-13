const express = require('express')
const { addAllTransaction, getAllTransaction, editTransaction,deleteTransaction } = require('../controllers/transactionController')

//router object
const router = express.Router()

// routers
// add transaction POST method

router.get('/', (req,res)=> {
    res.send('GET IN TRANSACTION ROUTER')
})

router.post('/add-transaction', addAllTransaction)

router.post('/edit-transaction', editTransaction)

router.post('/delete-transaction', deleteTransaction)

// get transaction GET method
router.post('/get-transaction', getAllTransaction)


module.exports = router