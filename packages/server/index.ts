import express from "express";

const server = express();

server.get("/db", (req, res) => {
  res.send("Hello World");
});

server.listen(8080);
