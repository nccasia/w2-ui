import { useApolloClient } from "@apollo/client";
import useNotifier from "@saleor/hooks/useNotifier";
import React from "react";
import { IntlShape, useIntl } from "react-intl";

import BackgroundTasksContext from "./context";
import { handleTask, queueCustom } from "./tasks";
import { QueuedTask, Task, TaskData, TaskStatus } from "./types";

export const backgroundTasksRefreshTime = 15 * 1000;

export function useBackgroundTasks(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _apolloClient: any,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _notify: any,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _intl: IntlShape,
) {
  const idCounter = React.useRef(0);
  const tasks = React.useRef<QueuedTask[]>([]);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      const queue = async () => {
        try {
          await Promise.all(
            tasks.current.map(async task => {
              if (task.status === TaskStatus.PENDING) {
                let status: TaskStatus;

                try {
                  status = await handleTask(task);
                } catch (error) {
                  throw error;
                }
                if (status !== TaskStatus.PENDING) {
                  const taskIndex = tasks.current.findIndex(
                    t => t.id === task.id,
                  );
                  tasks.current[taskIndex].status = status;
                }
              }
            }),
          );
        } catch (error) {
          throw error;
        }
      };

      queue();
    }, backgroundTasksRefreshTime);

    return () => clearInterval(intervalId);
  });

  function cancel(id: number) {
    tasks.current = tasks.current.filter(task => task.id !== id);
  }

  function queue(type: Task, data?: TaskData) {
    idCounter.current += 1;
    switch (type) {
      case Task.CUSTOM:
        queueCustom(idCounter.current, tasks, data);
        break;
    }

    return idCounter.current;
  }

  return {
    cancel,
    queue,
  };
}

const BackgroundTasksProvider: React.FC = ({ children }) => {
  const apolloClient = useApolloClient();
  const notify = useNotifier();
  const intl = useIntl();
  const { cancel, queue } = useBackgroundTasks(apolloClient, notify, intl);

  return (
    <BackgroundTasksContext.Provider
      value={{
        cancel,
        queue,
      }}
    >
      {children}
    </BackgroundTasksContext.Provider>
  );
};

BackgroundTasksProvider.displayName = "BackgroundTasksProvider";
export default BackgroundTasksProvider;
