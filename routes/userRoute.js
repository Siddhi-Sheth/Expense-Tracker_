const express = require('express')
const { loginController, registerController } = require('../controllers/userController')

//router object
const router = express.Router()

// routers

router.get('/', (req, res) => {
    // handle GET request to /api/v1/users
    res.send('Hello from the user route!')
  })


// POST || LOGIN user
router.post("/login", loginController)


// POST || register user
router.post("/register",registerController )

module.exports = router