import Skeleton from "@saleor/components/Skeleton";
import { Timeline, TimelineEvent } from "@saleor/components/Timeline";
import { TaskEventLogFragmentFragment } from "@saleor/graphql";
import { makeStyles } from "@saleor/macaw-ui";
import React from "react";

const useStyles = makeStyles(
  () => ({
    timeLine: {
      marginTop: 20,
    },
  }),
  { name: "WorkFlow" },
);

interface TaskHistoryProps {
  history: TaskEventLogFragmentFragment[];
}

const TaskHistory: React.FC<TaskHistoryProps> = props => {
  const { history } = props;
  const classes = useStyles();
  return (
    <div className={classes.timeLine}>
      {history ? (
        <Timeline>
          {history.map(({ id, createdAt, content }) => (
            <TimelineEvent key={id} title={content} date={createdAt} />
          ))}
        </Timeline>
      ) : (
        <Skeleton />
      )}
    </div>
  );
};

export default TaskHistory;
