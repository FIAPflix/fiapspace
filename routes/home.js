const express = require('express');
const router = express.Router();
const supabase = require('@supabase/supabase-js');
const dotenv = require('dotenv');
dotenv.config()

const supabaseClient = supabase.createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/reserva',(req, res) => {
    res.render('reserva');
})

router.post('/enviar-reserva', async (req, res) => {
    try {
        // console.log(req.body);
        const jsonData = req.body;
        const { data, error } = await supabaseClient.from("db_Reservas").insert(jsonData);
        if (error) {
          return res.status(400).json(error);
        }
        // res.status(200).json(req.body);
        // Adicionar aqui a resposta do agendamento (ex. alert com agendamento feito)
      } catch (error) {
        res.status(500).json({ error: "Internal server error" });
      }
    });

module.exports = router;