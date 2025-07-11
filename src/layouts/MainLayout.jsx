// src/layouts/MainLayout.jsx
import Navbar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";

const MainLayout = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh" // Full height layout
      bgcolor="#f5f5f5" // Light background (customizable)
    >
      <Navbar />

      <Box
        component="main"
        flexGrow={1}
        py={4}
        px={2}
        sx={{
          padding: "80", // Adjust depending on your Navbar height
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        {/* Use MUI Container for centralizing content */}
        <Container maxWidth="md">
          <Outlet />
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default MainLayout;
