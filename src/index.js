const express = require('express');
const bodyParser = require('body-parser');
const { verifyToken } = require('./middlewares/authMiddleWare');
const { getSequelize } = require('./database/mysql/index');
const { authenticate, syncModelsToDB } = require('./helpers/sequelize')
require('dotenv').config()

require('./models')

const PORT = process.env.PORT || 3000

// Setup MYSQL DB Connection
const sequelize = getSequelize();
authenticate.call(sequelize)
syncModelsToDB.call(sequelize)

const app = express()
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('Welcome to Bookmyshow Assignment 2 APIs!!!')
})


app.use('/user', require('./routes/userRoutes'));
app.use('/theatres', require('./routes/theatreRoutes'))
app.use('/cities', require('./routes/cityRoutes'))
app.use('/shows', require('./routes/movieRoutes'))

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})

module.exports = app