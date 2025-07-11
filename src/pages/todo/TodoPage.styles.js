import { styled } from "@mui/material/styles";

export const Root = styled("div")(({ theme }) => ({
  maxWidth: 600,
  margin: "2rem auto",
  padding: 20,
  background: "#fff",
  borderRadius: 8,
  boxShadow: "0 2px 8px #ccc",
}));

export const Heading = styled("h1")(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: "bold",
  color: "#333",
  marginBottom: 16,
}));

export const InputRow = styled("div")(({ theme }) => ({
  marginBottom: 16,
  display: "flex",
  alignItems: "center",
  gap: 8,
}));

export const Alert = styled("div")(({ theme }) => ({
  color: "#d32f2f",
  marginBottom: 8,
}));

export const List = styled("ul")(({ theme }) => ({
  listStyle: "none",
  padding: 0,
}));

export const ListItem = styled("li", {
  shouldForwardProp: (prop) => prop !== "completed" && prop !== "type",
})(({ completed, type }) => ({
  background: completed ? "#e0e0e0" : "#f9f9f9",
  marginBottom: 8,
  padding: 12,
  borderRadius: 6,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderLeft: type === "note" ? "4px solid #2196f3" : "4px solid #4caf50",
  opacity: completed ? 0.6 : 1,
  transition: "background 0.2s, opacity 0.2s",
}));

export const Meta = styled("span")(({ theme }) => ({
  fontSize: 12,
  color: "#888",
  marginLeft: 8,
}));

export const Button = styled("button")(({ theme }) => ({
  marginLeft: 8,
}));

export const EditButton = styled(Button)(({ theme }) => ({
  marginRight: 8,
}));

export const TextHeading = styled("span")(({ theme }) => ({
  fontWeight: "bold",
}));

export const TextNote = styled("span")(({ theme }) => ({
  fontWeight: "normal",
}));

export const LineThrough = styled("span")(({ theme }) => ({
  textDecoration: "line-through",
}));
