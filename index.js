const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const categoris = require("./data/categoris.json");
const news = require("./data/news.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Rabbit is running");
});

app.get("/categoris", (req, res) => {
  res.send(categoris);
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedId = news.find((n) => n._id === id);
  res.send(selectedId);
});

app.get("/categoris/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id === 0) {
    res.send(news);
  } else {
    const categoryNews = news.filter((n) => parseInt(n.category_id) === id);
    res.send(categoryNews);
  }
});

app.listen(port, () => {
  console.log(`Rabbit is running on port : ${port}`);
});
