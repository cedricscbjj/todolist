

require('dotenv').config();


const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const router = require('./app/router');
app.use(router);


const PORT = process.env.PORT || 3033;
app.listen(PORT, () => {
    console.log(`Bonjour numero ${PORT} ca va?`);
})