const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.send("<h2>Hello World!</h2>");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
