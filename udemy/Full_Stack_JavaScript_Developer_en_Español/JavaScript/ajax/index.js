const express = require('express')
const cors = require("cors");

const app = express()
const port = process.env.port || 3001

app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.get("/users", (req, res) => {
  res.send(200, {users:[]})
});

app.post('/users', (req, res) => {
  console.log(req.body)
  res.status(200).send({message:'el usuario ha sido registrado',
body: req.body})
  });

app.listen(3001, () => {
  console.log("app corriendo en el puerto 3001");
});
