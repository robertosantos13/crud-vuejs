const express = require('express');
const ProductController = require('./controllers/ProductController');

const routes = express.Router();

routes.get('/api/products', ProductController.search);

routes.post('/api/product/form', ProductController.create);

routes.put('/api/product/edit', ProductController.update);

routes.delete('/api/product/delete', ProductController.delete);

module.exports = routes;
