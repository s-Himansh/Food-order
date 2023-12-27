const express = require('express');
const Router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');


Router.post('/createuser', [body('email', 'Incorrect Email').isEmail(), body('password', 'Incorrect Password').isLength({ min: 5 }), body('name').isLength({ min: 3 })], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        await User.create({
            name: req.body.name,
            location: req.body.location,
            email: req.body.email,
            password: req.body.password
        })
        res.json({ success: true })
    } catch (error) {
        console.log(error.message);
        res.json({ success: false })
    }
})

Router.post('/loginuser', [body('email', 'Incorrect Email').isEmail(), body('password', 'Incorrect Password').isLength({ min: 5 })], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const email = req.body.email;
        const userData = await User.findOne({ email: email });
        if (!userData) {
            return res.status(400).json({ errors: "Incorrect credentials. Please try again" });
        }

        if (req.body.password !== userData.password) {
            return res.status(400).json({ errors: "Incorrect credentials. Please try again" });
        }

        res.json({ success: true });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false });
    }
})

module.exports = Router;

