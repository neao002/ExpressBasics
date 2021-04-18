const express = require("express");

const app = express();

const port = 3000;

// app.use((req, res) => {
//   console.log("we got a request");
//   res.send("hello");
// });

app.listen(port),
  () => {
    console.log("on port 3000");
  };

app.get("/cats", (req, res) => {
  res.send("meoh");
});

app.get("/dogs", (req, res) => {
  res.send("dog");
});

app.get("/", (req, res) => {
  res.send("this is my home page");
});

// generic padern

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>hello browsing the ${subreddit} <h1/>`);
});

// put it an the end of the code and is for 404

app.get("*", (req, res) => {
  res - send("wrong path");
});
