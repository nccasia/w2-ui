import { Button, Card, TextField, Typography } from "@material-ui/core";
import UserChip from "@saleor/components/UserChip";
import { useGetCommentQuery, useInsertCommentMutation } from "@saleor/graphql";
import useNotifier from "@saleor/hooks/useNotifier";
import { commonMessages } from "@saleor/intl";
import { makeStyles } from "@saleor/macaw-ui";
import { mapEdgesToItems } from "@saleor/utils/maps";
import React, { useCallback, useMemo, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";

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
    addComment: {
      display: "flex",
      marginBottom: theme.spacing(4),
    },
    button: {
      zIndex: 2,
      padding: `7px`,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
    input: {
      "& > div": {
        padding: "0 0 0 14px",
      },
      "& textarea": {
        "&::placeholder": {
          opacity: [[1], "!important"] as any,
        },
        zIndex: 2,
      },
      background: theme.palette.background.paper,
    },
  }),
  { name: "TaskComment" },
);

interface Props {
  task: any;
}

const TaskComment: React.FC<Props> = ({ task }) => {
  const classes = useStyles();
  const notify = useNotifier();
  const intl = useIntl();
  const [textCommentField, setTextCommentField] = useState<string>("");

  const { data, refetch } = useGetCommentQuery();

  const mapEdgesToComments = useMemo(
    () => mapEdgesToItems(data?.Comment_connection),
    [data?.Comment_connection],
  );

  const decodedStringIdTask = atob(task.id);
  const [insertCommentMutation] = useInsertCommentMutation({
    onCompleted: () => {
      notify({
        status: "success",
        text: intl.formatMessage(commonMessages.commentSuccess),
      });
      refetch();
    },
  });

  const handleCommentTask = useCallback(
    (text: string) => {
      if (!text) {
        return notify({
          status: "error",
          text: intl.formatMessage(commonMessages.commentError),
        });
      }
      insertCommentMutation({
        variables: {
          content: text,
          taskId: JSON.parse(decodedStringIdTask)[3],
          creatorId: task.creatorId,
        },
      });
      setTextCommentField("");
    },
    [decodedStringIdTask, insertCommentMutation, intl, notify, task.creatorId],
  );

  return (
    <Card className={classes.root}>
      <AddComment
        onCommentTask={handleCommentTask}
        setTextCommentField={setTextCommentField}
        textCommentField={textCommentField}
      />
      {mapEdgesToComments?.map?.(item =>
        task.id === item.Task.id ? (
          <Comment key={item.id} comments={item} />
        ) : (
          <></>
        ),
      )}
    </Card>
  );
};

const Comment = ({ comments }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div style={{ width: "8%", cursor: "pointer" }}>
        <UserChip user={comments.User} />
      </div>
      <div style={{ width: "92%" }}>
        <div className={classes.commentInfo}>
          <Typography variant="subtitle1" className={classes.username}>
            {`${comments.User.lastname} ${comments.User.firstname}`}
          </Typography>
          <Typography variant="subtitle2">{`${comments.updatedAt}`}</Typography>
        </div>
        <div>
          <Typography variant="body2">{comments.content}</Typography>
        </div>
      </div>
    </div>
  );
};

const AddComment = ({
  onCommentTask,
  textCommentField,
  setTextCommentField,
}) => {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <div className={classes.addComment}>
      <TextField
        className={classes.input}
        placeholder={intl.formatMessage({
          id: "xgPyKg",
          defaultMessage: "Enter the comment...",
        })}
        onChange={e => setTextCommentField(e.target.value)}
        value={textCommentField}
        name="message"
        fullWidth
        multiline
        InputProps={{
          endAdornment: (
            <Button
              className={classes.button}
              onClick={() => onCommentTask(textCommentField)}
            >
              <FormattedMessage id="9WRlF4" defaultMessage="Send" />
            </Button>
          ),
        }}
        variant="outlined"
      />
    </div>
  );
};

export default TaskComment;
