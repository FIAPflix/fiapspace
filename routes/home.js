const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/reserva',(req, res) => {
    res.render('reserva');
})

module.exports = router;