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

app.get("/", (req, res) => {
  res.redirect("/posts");
});

app.get("/posts", (req, res) => {
  res.render("posts/index", { posts });
});

app.get("/feedback", (req, res) => {
  res.render("feedback", { feedbacks });
});

app.post("/posts", (req, res) => {
  const { title, content } = req.body;
  const newPost = {
    id: uuidv4(),
    title,
    content,
    createdAt: new Date().toLocaleString(),
  };
  posts.push(newPost);
  res.redirect("/posts");
});

app.get("/post/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find((p) => p.id == id);
  if (!post) {
    return res.status(404).send("Post not found");
  }
  res.render("posts/show", { post });
});

app.get("/post/:id/edit", (req, res) => {
  const { id } = req.params;
  const post = posts.find((p) => p.id == id);
  if (!post) {
    return res.status(404).send("Post not found");
  }
  res.render("posts/edit", { post });
});

app.patch("posts/:id", (req, res) => {
  const { id } = req.params;
  const { title, content } = req.params;
  const post = posts.find((p) => p.id == id);
  if (post) {
    post.title = title;
    post.content = content;
  }
  res.redirect(`/posts/${id}`);
});

app.delete("posts/:id", (req, res) => {
  const { id } = req.params;
  const idx = posts.find((p) => p.id == id);
  if (idx != -1) {
    posts.splice(idx, 1);
  }
  res.redirect("/posts");
});

app.post("/feedback", (req, res) => {
  const { username, message } = req.body;
  const newFeedback = { id: uuidv4(), username, message };
  feedbacks.push(newFeedback);
  res.redirect("/feedback");
});

app.listen(3000, () => {
  console.log("Listening on port");
});
