import { Notifications } from "@material-ui/icons";
import { makeStyles } from "@saleor/macaw-ui";
import React from "react";
const useStyles = makeStyles(
  () => ({
    container: {
      height: "100%",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    notificationIcon: {
      marginRight: "10px",
      fontSize: "30px",
    },
  }),
  {
    name: "NotificationTask",
  },
);
export const NotificationTask: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Notifications
        className={classes.notificationIcon}
        fontSize="inherit"
      ></Notifications>
    </div>
  );
};
