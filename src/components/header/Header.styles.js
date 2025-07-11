import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#4caf50",
    color: "white",
    padding: "1rem",
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  logo: {
    fontSize: "1.8rem",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
    "& a": {
      color: "white",
      textDecoration: "none",
      fontSize: "1rem",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
});

export default useStyles;

/* 
Q- How to decide which styles to use in a React component?  
 Main.styles.js > Page.styles.js > Component.styles.js

 Q- What should be the basic style of a component?
 Q- How can I customize my component style based on pages?



 OVERRIDE - 
*/
