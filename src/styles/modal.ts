import { makeStyles } from "@saleor/macaw-ui";

export const styleModal = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  maxHeight: 700,
  bgcolor: "background.paper",
  borderRadius: "7px",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
};

export const radioType = {
  margin: 10,
  minWidth: "90%",
  display: "flex",
  justifyContent: "space-between",
  padding: "0 10px",
  borderRadius: "4px",
  border: "1px solid rgba(37, 41, 41, 0.1)",
};

export const iconModal = {
  display: "flex",
  justifyContent: "space-between",
};

export const iconClose = {
  padding: "5px",
  borderRadius: "50px",
  border: "1px solid #333",
  fontSize: 28,
  background: "#333",
  color: "#fff",
  cursor: "pointer",
};

export const useCloseIconStyles = makeStyles(
  theme => ({
    root: {
      padding: "5px",
      borderRadius: "50px",
      border: "1px solid #333",
      fontSize: 28,
      background: theme.palette.type === "dark" ? "#FAFAFA" : "#28234A",
      color: theme.palette.type === "dark" ? "#333" : "#fff",
      cursor: "pointer",
      transition: "all 0.2s",
      "&:hover": {
        color: "#3EA3FF",
        borderColor: "#3EA3FF",
        backgroundColor:
          theme.palette.type === "dark" ? "rgba(52, 56, 75, 1)" : "#fff",
      },
    },
  }),
  {
    name: "CloseIcon",
  },
);
