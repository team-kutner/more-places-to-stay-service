const app = require('./app.js');
const port = 3000;



app.listen(port, () => {
  console.log(`your server is running listening at http://localhost:${port}`)
})

