# 🧠 NotesCraft – A Smart Notes & To-Do App

A personal productivity project inspired by **Google Keep**, **NotesCraft** is a modern React-based frontend application designed to enhance note-taking, task tracking, and content grouping. This project is part of a self-driven learning initiative aimed at mastering **advanced frontend development** and backend integration using **JWT** and **PGlite (Postgres)**.

---

## 🚀 Project Goal

The primary objective is to build a robust, responsive, and extensible notes and to-do list web application over **3 months**, with a strong focus on:

- Understanding core frontend principles with **pure HTML & CSS**
- Learning and applying **React** with modern features (hooks, context, component composition)
- Building **authentication workflows** using **JWT**
- Storing and retrieving notes via **PGlite**, a lightweight PostgreSQL-compatible environment
- Gradually scaling the app to include **video-based learning features**

---
## 📌 Key Features (Phase 1)

| Feature                                     | Status     |
|---------------------------------------------|------------|
|Create Notes (Text/Checklist)                | In Progress    |
|✅ User Authentication (Login/Signup/Logout) using JWT | Planned |
|✅ Edit / Delete Notes                     | Planned    |
|✅ Group Notes by Tags or Categories       | Planned    |
|✅ Pin / Archive Notes                     | Planned    |
|✅ Responsive Design                       | Planned    |
|✅ Local Storage + Backend Sync with PGlite| Planned    |

---

## 📺 Extended Features (Phase 2)

Once core functionality is complete, the project will expand with:

- 🎥 **Learning Module**  
  A dedicated section to **fetch and play videos**, ideal for personal or educational use

- 🔍 **Search Functionality**  
  Real-time filtering of notes by content or tags

- 🌈 **Theme Switcher**  
  Light/Dark mode toggle for enhanced UX

- 📋 **Drag & Drop Support**  
  Rearranging notes and groups with ease

- 🔄 **Offline Syncing**  
  Explore service workers and caching

---

## 🧱 Tech Stack

| Layer            | Tools                                   |
|------------------|------------------------------------------|
| **Frontend**     | React, HTML5, CSS3 (Pure – no frameworks initially) |
| **State Management** | React Hooks + Context API             |
| **Authentication** | JWT                                   |
| **Backend**      | PGlite (Postgres) for realistic DB experience |
| **Tooling**      | Vite, ESLint, Prettier                  |
| **Deployment**   | Docker (ECS optional), Netlify or Vercel|

---

## 📅 Timeline & Milestones

| Month     | Focus                                                   |
|-----------|----------------------------------------------------------|
| **Month 1** | UI Design, Auth Flow, Basic Note CRUD                   |
| **Month 2** | Note Grouping, PGlite Integration, UI Polish            |
| **Month 3** | Video Module, Responsive Design, Final Testing & Docs   |

---

## 🧠 Learning Outcomes

By the end of this project, I aim to:

- Solidify core frontend development skills without relying on external UI libraries
- Gain hands-on experience with JWT-based auth flows
- Develop real-world familiarity with PostgreSQL using PGlite
- Understand responsive layout systems from scratch
- Build and debug a complete CRUD + media-rich application

---
## Packages
- [n](https://www.npmjs.com/package/n)
- [pnpm](https://pnpm.io/)
- [electric-sql/pglite-sync](https://www.npmjs.com/package/@electric-sql/pglite-sync)


## How to run project
- Download and install pnpm 
1. ```pnpm install```
2. ```pnpm dev```


## Notes 

1. Package react-router-dom - to route the URL
eg- 
```JS
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ForgotPassword from '../pages/ForgotPassword';
import Home from '../pages/Home';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}
```


2. Icons - react-icons (Smaller, Variety)

3. Security of the Database (Next Session)