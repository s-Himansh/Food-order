const express = require('express')
const app = express()
const port = 5000
const connection = require('./db');
const createUser = require('./Routes/CreateUser');
const displayData = require('./Routes/DisplayData');

connection();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

app.use(express.json());
app.use('/api', createUser);
app.use('/api', displayData);

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})