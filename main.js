const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Without middleware
app.get("/", function (req, res) {
  res.redirect("https://github.com/opral/monorepo/tree/main/lix");
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
