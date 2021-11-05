const { Router } = require('express')
const bcrypt = require('bcrypt')
const router = Router()
const joiSchema = require('../joi_schema/validation.js');
const User = require('../models/User.js')
const Message = require('../loggers/message.js')

let message = new Message()

router.post('/register', async (req, res, next) => {
    try {
        const { firstname, lastname, email, age, password } = req.body;
        await joiSchema.validateAsync({ firstname, lastname, email, age, password });

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = await new User({
            firstname,
            lastname,
            email,
            age,
            password: hashPassword
        })

        await newUser.save()
        message.success(res, 'success')
    }
    catch(e) {
        message.error(e)
    }
})

module.exports = router;