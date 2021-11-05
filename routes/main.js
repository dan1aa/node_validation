const { Router } = require('express')
const router = Router()
const Message = require('../loggers/message')

let message = new Message()

router.all("*", (req, res) => {
    message.invalidRoute(res, 'Invalid route, try search better!')
})

router.get('/', (req, res) => {
    try {
        message.success(res, 'home page')
    }
    catch(e) {
        message.error(e)
    }
})

module.exports = router;