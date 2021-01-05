const myql = require('mysql');

const con = myql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'products',
});

con.connect((error) => {
  if (error) throw error;

  console.log('Connected!');
});

module.exports = con;
