import Form from "@saleor/components/Form";
import Hr from "@saleor/components/Hr";
import Skeleton from "@saleor/components/Skeleton";
import {
  Timeline,
  TimelineAddNote,
  TimelineEvent,
} from "@saleor/components/Timeline";
import React from "react";

import { History } from "../../model/Task";

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
          {history
            .slice()
            .reverse()
            .map(event => {
              const { id, date, message } = event;
              return <TimelineEvent key={id} title={message} date={date} />;
            })}
        </Timeline>
      ) : (
        <Skeleton />
      )}
    </div>
  );
};

export default TaskHistory;
