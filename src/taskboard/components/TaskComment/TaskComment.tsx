import { Button, Card, TextField, Typography } from "@material-ui/core";
import { useUser } from "@saleor/auth";
import UserChip from "@saleor/components/UserChip";
import {
  useGetCommentLazyQuery,
  useInsertCommentMutation,
} from "@saleor/graphql";
import useNotifier from "@saleor/hooks/useNotifier";
import { commonMessages } from "@saleor/intl";
import { makeStyles } from "@saleor/macaw-ui";
import { createNumberId } from "@saleor/utils/createNumberId";
import { mapEdgesToItems } from "@saleor/utils/maps";
import React, { useCallback, useEffect, useMemo, useState } from "react";
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
      gap: "15px",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(3),
      "& .MuiButtonBase-root": {
        paddingRight: 0,
      },
    },
    avatar: {
      width: "40px",
      height: "40px",
      borderRadius: "100%",
    },
    commentInfo: {
      display: "flex",
      alignItems: "baseline",
      flexWrap: "wrap",
    },
    commentContent: {
      marginTop: "10px",
    },
    username: {
      fontWeight: "bold",
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
  const user = useUser();
  const [textCommentField, setTextCommentField] = useState<string>("");

  const [getComment, { data, refetch }] = useGetCommentLazyQuery();

  const mapEdgesToComments = useMemo(
    () => mapEdgesToItems(data?.Comment_connection),
    [data?.Comment_connection],
  );

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
          taskId: createNumberId(task.id),
          creatorId: createNumberId(user?.user.id),
        },
      });
      setTextCommentField("");
    },
    [insertCommentMutation, intl, notify, task.id, user?.user.id],
  );

  useEffect(() => {
    if (task.id) {
      getComment({
        variables: {
          taskId: createNumberId(task.id),
        },
      });
    }
  }, [task, getComment]);

  return (
    <Card className={classes.root}>
      <AddComment
        onCommentTask={handleCommentTask}
        setTextCommentField={setTextCommentField}
        textCommentField={textCommentField}
      />
      {mapEdgesToComments?.map?.(item => (
        <Comment key={item.id} comments={item} />
      ))}
    </Card>
  );
};

const Comment = ({ comments }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div style={{ cursor: "pointer", paddingRight: 0 }}>
        <UserChip user={comments.User} displayName={false} />
      </div>
      <div>
        <div className={classes.commentInfo}>
          {comments.User.lastname && comments.User.firstname ? (
            <Typography variant="subtitle1" className={classes.username}>
              {`${comments.User.lastname} ${comments.User.firstname}`}
            </Typography>
          ) : (
            <Typography variant="subtitle1" className={classes.username}>
              {comments.User.fullName}
            </Typography>
          )}

          <Typography
            style={{ fontSize: "10px", fontStyle: "italic" }}
            variant="subtitle2"
          >
            Commented on{" "}
            <b>{`${new Intl.DateTimeFormat("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            }).format(
              new Date(
                new Date(comments.updatedAt).getTime() -
                  new Date().getTimezoneOffset() * 60000,
              ),
            )}`}</b>
          </Typography>
        </div>
        <div className={classes.commentContent}>
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
