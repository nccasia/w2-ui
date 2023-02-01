import { Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import HorizontalSpacer from "@saleor/apps/components/HorizontalSpacer";
import DefaultCardTitle from "@saleor/components/CardTitle";
import CustomAvatar from "@saleor/components/CustomAvatar/CustomAvatar";
import { CircleIndicator, makeStyles, Pill } from "@saleor/macaw-ui";
import React from "react";

const useStyles = makeStyles(
  theme => ({
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    title: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
    },
    orderNumber: {
      display: "inline",
      marginLeft: theme.spacing(1),
    },
    warehouseName: {
      float: "right",
      alignSelf: "center",
      color: theme.palette.text.secondary,
      margin: `auto ${theme.spacing(1)} auto auto`,
    },
    cardHeader: {
      fontSize: "21px",
      fontWeight: 500,
      lineHeight: "24px",
      letterSpacing: "0.02em",
      textAlign: "left",
    },
    cardPill: {
      marginLeft: "24px",
    },
    indicator: {
      display: "flex",
      alignItems: "center",
    },
    avatar: {
      marginRight: "24px",
      cursor: "pointer",
    },
  }),
  { name: "TaskTitle" },
);

interface TaskTitleProps {
  creatorId?: number;
  avatar?: string;
  title?: string;
  state?: string;
}

const TaskTitle: React.FC<TaskTitleProps> = ({ creatorId, title, state }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <DefaultCardTitle
        title={
          <div className={classes.title}>
            <div className={classes.indicator}>
              <CircleIndicator color="warning" />
            </div>
            <HorizontalSpacer spacing={2} />
            <Typography className={classes.cardHeader}>
              {title}
              <Pill
                className={classes.cardPill}
                label={state}
                color="warning"
              />
            </Typography>
          </div>
        }
      />
      <div className={classes.avatar}>
        <Avatar>
          <CustomAvatar id={creatorId} />
        </Avatar>
      </div>
    </div>
  );
};

export default TaskTitle;
