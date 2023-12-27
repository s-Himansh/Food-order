const express = require('express');
const Router = express.Router();

Router.post('/foodData', async(req, res) => {
    try {
        // console.log(global.food_items);

        res.send([global.food_items, global.food_categories]);
    } catch (error) {
        console.log(error.message);
    }
});


module.exports = Router;