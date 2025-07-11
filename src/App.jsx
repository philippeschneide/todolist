import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;





// same id cannot be duplicated in the same page.
// inline >id > classes > elements (div, span, p, a , header, logo)