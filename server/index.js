const express = require('express')

const app = express()

app.use('/graph', require('./graph'))

module.exports = app
