const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const messages = [];

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.render("index"));
app.get("/about", (req, res) => res.render("about"));
app.get("/work", (req, res) => res.render("work"));
app.get("/contact", (req, res) => res.render("contact"));

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  messages.push({ name, email, message });
  console.log("New message:", { name, email, message });
  res.send("Thanks for your message!");
});

app.listen(port, () => {
  console.log(`Portfolio site running at http://localhost:${port}`);
});
