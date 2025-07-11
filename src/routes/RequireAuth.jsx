// src/routes/RequireAuth.jsx
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";


export default function RequireAuth() {
//   const isLoggedIn = !!localStorage.getItem("token");
  const isLoggedIn = true;
  return isLoggedIn ? <Outlet/> : <Navigate to="/login" replace />;
}
