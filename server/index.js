const express = require('express');
const app = express();
const products = require('../products.json');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');

app.use(express.json());

app.listen(4040, () => console.log('Server running on 4040'));

app.get('/api/products', getProducts)

app.get('/api/products/:id', getProduct)

