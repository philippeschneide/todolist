// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import HomePage from "../pages/home_page/HomePage.jsx";
import Login from "../pages/login/Login.jsx";
// import Signup from "../../pages/Signup";
import RequireAuth from "./RequireAuth.jsx";
import TodoPage from "../pages/todo/TodoPage.jsx";
import NotesPage from "../pages/notes/NotesPage.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route element={<RequireAuth />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/notes" element={<NotesPage />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      {/* <Route path="/signup" element={<Signup />} /> */}
    </Routes>
  );
}
