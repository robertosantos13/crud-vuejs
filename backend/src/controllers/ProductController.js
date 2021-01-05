const connect = require('../database/connect');
let productModel = require('../models/product.model');

const Product = {
  search: (req, res) => {
    connect.query(`SELECT * FROM products`, (err, result) => {
      if (err) throw err;
      productModel = result;
      return res.json({ products: productModel });
    });
  },
  create: (req, res) => {
    productModel = req.body;
    connect.query(
      `INSERT INTO products (name, quantity, price) values
              ("${productModel.name}", "${productModel.quantity}", "${productModel.price}");`,
      (err, result) => {
        if (err) throw err;
        return res.json({ message: 'O produto foi criado com sucesso.' });
      }
    );
  },
  update: (req, res) => {
    productModel = req.body;
    console.log(productModel);
    connect.query(
      `UPDATE products SET  
      name = "${productModel.name}", quantity = "${productModel.quantity}", price = "${productModel.price}" WHERE id = ${productModel.id};`,

      (err, result) => {
        if (err) throw err;
        return res.json({ message: 'O produto foi atualizado com sucesso. ' });
      }
    );
  },
  delete: (req, res) => {
    const { id } = req.query;
    productModel.id = Number.parseInt(id);

    connect.query(
      `DELETE FROM products WHERE id = ${productModel.id}`,
      (error, result) => {
        if (error) throw error;

        return res.json({ message: 'O produto foi deletado com sucesso.' });
      }
    );
  },
};

module.exports = Product;
