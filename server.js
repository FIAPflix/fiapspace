const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
var path = require('path');
var app = module.exports = express();

const homeRoutes = require('./routes/home');
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config()

// Render engine
app.engine('.html', require('ejs').__express);
app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'html');

// Routes
app.use(homeRoutes);
app.use((req, res) => {
    res.status(404).send('<h1>Página não encontrada</h1>');
});

// Listen
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});