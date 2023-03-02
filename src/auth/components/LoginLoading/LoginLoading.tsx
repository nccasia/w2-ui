import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@saleor/macaw-ui";
import React, { HTMLAttributes } from "react";

const useStyles = makeStyles(
  {
    root: {
      alignItems: "center",
      display: "flex",
      height: "100vh",
      justifyContent: "center",
    },
  },
  { name: "LoginLoading" },
);
const LoginLoading: React.FC<HTMLAttributes<HTMLDivElement>> = props => {
  const classes = useStyles();

  return (
    <div className={classes.root} {...props}>
      <CircularProgress size={128} />
    </div>
  );
};
LoginLoading.displayName = "LoginLoading";
export default LoginLoading;
