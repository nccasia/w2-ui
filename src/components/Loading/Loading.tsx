import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@saleor/macaw-ui";
import React from "react";

const useStyles = makeStyles(
  () => ({
    container: {
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& > .MuiCircularProgress-colorPrimary": {
        color: "white",
      },
    },
  }),
  { name: "Loading" },
);

const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <CircularProgress color="primary" />
    </div>
  );
};

export default Loading;
