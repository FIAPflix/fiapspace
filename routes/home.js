const express = require('express');
const router = express.Router();
const supabase = require('@supabase/supabase-js');
const dotenv = require('dotenv');
dotenv.config()

const supabaseClient = supabase.createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/reserva', (req, res) => {
  res.render('reserva');
})

router.get('/agendamentos/data', async (req, res) => {
  try {
    const { data, error } = await supabaseClient
      .from("db_Reservas")
      .select('*')//.eq('id', your_id)
    if (error) {
      console.log(`Error fetching data from Supabase: ${error}`);
      res.status(500).json({ error: "Error fetching data from Supabase" });
    } else {
      res.json(data); // Return the fetched data as a JSON response
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get('/agendamentos', (req, res) => {
  // Render the HTML page that includes JavaScript to fetch data from '/agendamentos/data'
  // This route handler should only render the HTML page and not return JSON data
  res.render('agendamentos');
});

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

router.post('/confirmar-reserva/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await supabaseClient
      .from('db_Reservas')
      .update({ status: 'Confirmado' })
      .eq('id', id);
    if (error) {
      throw error;
    }
    res.status(200).json({ message: 'Reserva confirmada com sucesso' });
  } catch (error) {
    console.error('Erro ao confirmar a reserva:', error.message);
    res.status(500).json({ error: 'Erro ao confirmar a reserva' });
  }
});

router.post('/cancelar-reserva/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await supabaseClient
      .from('db_Reservas')
      .update({ status: 'Canceled' })
      .eq('id', id);
    if (error) {
      throw error;
    }
    res.status(200).json({ message: 'Reserva cancelada com sucesso' });
  } catch (error) {
    console.error('Erro ao cancelar a reserva:', error.message);
    res.status(500).json({ error: 'Erro ao cancelar a reserva' });
  }
});

module.exports = router;