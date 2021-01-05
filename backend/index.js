const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');

const app = express();
app.use(cors({ origin: 'http://localhost:8081' }));
app.use(express.json());

app.use(routes);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
