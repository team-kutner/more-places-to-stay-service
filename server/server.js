require('dotenv').config();
const app = require('./routes.js');
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`your server is running listening on port ${port}`);
});