const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const categoris = require("./data/categoris.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Rabbit is running");
});

app.get("/categoris", (req, res) => {
  res.send(categoris);
});

app.listen(port, () => {
  console.log(`Rabbit is running on port : ${port}`);
});
