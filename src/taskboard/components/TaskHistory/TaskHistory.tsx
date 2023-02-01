import Form from "@saleor/components/Form";
import Hr from "@saleor/components/Hr";
import Skeleton from "@saleor/components/Skeleton";
import {
  Timeline,
  TimelineAddNote,
  // TimelineEvent,
} from "@saleor/components/Timeline";
import { History } from "@saleor/taskboard/model/Task";
import React from "react";

interface TaskHistoryProps {
  history: History[];
}

const TaskHistory: React.FC<TaskHistoryProps> = props => {
  const { history } = props;

  return (
    <div>
      <Hr />
      {history ? (
        <Timeline>
          <Form confirmLeave initial={{ message: "" }} resetOnSubmit>
            {({ change, data, reset, submit }) => (
              <TimelineAddNote
                message={data?.message}
                reset={reset}
                onChange={change}
                onSubmit={submit}
              />
            )}
          </Form>
          {/* {history.map(({ id, createdAt, content }) => (
            <TimelineEvent key={id} title={content} date={createdAt} />
          ))} */}
        </Timeline>
      ) : (
        <Skeleton />
      )}
    </div>
  );
};

export default TaskHistory;
