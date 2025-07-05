📝 PostDesk

**PostDesk** is a full-stack Express.js web application for managing blog posts and collecting user feedback. It features server-side rendering with EJS, full CRUD functionality for posts, and a feedback form system — all in a clean and modular architecture.

---

## 🚀 Features

### 📝 Blog Posts Manager
- Create, Read, Update, Delete blog posts
- Unique post IDs using `uuid`
- RESTful routes
- Edit and delete via `method-override`

### 💬 Feedback Form
- Feedback form for user messages
- Server-side form validation
- In-memory storage for simplicity

### 🎨 User Interface
- Clean and responsive layout using EJS templates
- Modular design with reusable partials (navbar, footer)
- Shared layout for consistency across views

---

## 📁 Project Structure

```
post-desk/
│
├── views/
│   ├── posts/              # Blog post templates
│   ├── partials/           # Navbar and footer components
│   ├── feedback.ejs        # Feedback form
│   └── layout.ejs          # Base layout
│
├── public/                 # Optional CSS/static files
├── data.js                 # Blog post in-memory data
├── feedbacks.js            # Feedback form data
├── app.js                  # Express app entry point
└── README.md               # Project documentation
```

---

## ⚙️ Tech Stack

- **Node.js**
- **Express.js**
- **EJS**
- **UUID**
- **Method-Override**
- **HTML/CSS**

---

## 🧠 What I Learned

- Implemented Express routes with RESTful architecture
- Used `method-override` to handle PATCH/DELETE via forms
- Designed dynamic UIs using EJS partials
- Managed form data and server rendering together
- Built a full-stack app with no frontend framework

---

## 🙋 Author

Created with ❤️ by Priyanshu 
