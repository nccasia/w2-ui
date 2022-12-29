import { Card, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@saleor/macaw-ui";
import React from "react";

const useStyles = makeStyles(
  theme => ({
    root: {
      marginTop: "20px",
      padding: theme.spacing(2),
    },
    container: {
      display: "flex",
      alignItems: "start",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(3),
    },
    avatar: {
      width: "40px",
      height: "40px",
      borderRadius: "100%",
    },
    commentInfo: {
      display: "flex",
      alignItems: "center",
    },
    username: {
      fontWeight: "bold",
      color: "#516079",
      marginRight: theme.spacing(2),
    },
    inputAddComment: {
      width: "100%",
      marginBottom: theme.spacing(4),
    },
  }),
  { name: "C:Workspacew2-uisrc\taskscomponentsTaskCommentTaskComment" },
);

const TaskComment = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <AddComment />
      <Comment />
      <Comment />
    </Card>
  );
};

const Comment = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div style={{ width: "8%" }}>
        <img
          className={classes.avatar}
          src="https://images.pexels.com/photos/14769547/pexels-photo-14769547.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt="avatar"
        />
      </div>
      <div style={{ width: "92%" }}>
        <div className={classes.commentInfo}>
          <Typography variant="subtitle1" className={classes.username}>
            Trong Son
          </Typography>
          <Typography variant="subtitle2">
            {String(new Date().toLocaleString())}
          </Typography>
        </div>
        <div>
          <Typography variant="body2">
            Duis sit sunt cillum in pariatur irure consectetur. Labore voluptate
            aliqua non magna aliquip esse Lorem officia esse labore qui amet est
            amet. Proident duis aliquip laborum officia deserunt Lorem magna
            anim. Ex ullamco adipisicing labore consectetur sint. Consequat in
            veniam id sint eiusmod. Ut occaecat ullamco tempor aliqua id id
            excepteur nisi esse ut.
          </Typography>
        </div>
      </div>
    </div>
  );
};

const AddComment = () => {
  const classes = useStyles();
  return (
    <>
      <TextField
        className={classes.inputAddComment}
        label={"Comment"}
        placeholder={"Enter the comment..."}
      />
    </>
  );
};

export default TaskComment;
