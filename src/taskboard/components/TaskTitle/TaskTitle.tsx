import { Typography } from "@material-ui/core";
import HorizontalSpacer from "@saleor/apps/components/HorizontalSpacer";
import DefaultCardTitle from "@saleor/components/CardTitle";
import UserChip from "@saleor/components/UserChip";
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
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      fontSize: "21px",
      fontWeight: 500,
      lineHeight: "24px",
      letterSpacing: "0.02em",
      textAlign: "left",
      [theme.breakpoints.down(633)]: {
        display: "block",
      },
    },
    titleHeader: {
      display: "inline-flex",
      marginRight: "20px",
      [theme.breakpoints.down(425)]: {
        marginRight: "0px",
        maxWidth: "200px",
      },
    },
    titleStatus: {
      display: "flex",
      [theme.breakpoints.down(520)]: {
        "& .MuiChip-label": {
          maxWidth: "100px",
        },
      },
      gap: "20px",
    },
    titleText: {
      [theme.breakpoints.down(425)]: {
        whiteSpace: "nowrap",
        minWidth: "100%",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
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
  user?: any;
  title?: string;
  state?: string;
  status?: string;
}

const TaskTitle: React.FC<TaskTitleProps> = ({
  title,
  state,
  status,
  user,
}) => {
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
              <div className={classes.titleHeader}>
                <span className={classes.titleText}>{title}</span>
              </div>
              <div className={classes.titleStatus}>
                {state && <Pill label={state} color="warning" />}
                {status && <Pill label={status} color="success" />}
              </div>
            </Typography>
          </div>
        }
      />
      <div className={classes.avatar}>
        <UserChip user={user} />
      </div>
    </div>
  );
};

export default TaskTitle;
