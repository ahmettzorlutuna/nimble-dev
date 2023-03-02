const express = require('express');
const router = express.Router();

router.get('/',(req,res) =>{
    res.render(`index`) //${__dirname}: for specify root folder
})

module.exports = router