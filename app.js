const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json({ extended: true }));

const userRoutes = require('./app/routes/userRoutes');
const orderRoutes = require('./app/routes/orderRoutes')

app.use('/api/user', userRoutes);
app.use('/api/order', orderRoutes);

const port = 3000;
app.listen(port,
    () =>
        console.log(`Started server at http://localhost:${port}/api/order`));
