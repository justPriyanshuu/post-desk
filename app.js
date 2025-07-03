const express = require("express");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
var methodOverride = require("method-override");

const posts = require("./data");
const feedbacks = require("./feedbacks");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join("public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/posts", (req, res) => {
  res.render("posts/index", { posts });
});

app.get("/feedback", (req, res) => {
  res.render("feedback", { feedbacks });
});


