import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { Backlink } from "@saleor/components/Backlink";
import { Container } from "@saleor/components/Container";
import Grid from "@saleor/components/Grid";
import UserChip from "@saleor/components/UserChip";
import { useGetUserQuery, useSubmitTaskMutation } from "@saleor/graphql";
import { sectionNames } from "@saleor/intl";
import { Pill, SwitchSelector, SwitchSelectorButton } from "@saleor/macaw-ui";
// import { taskListUrl } from "@saleor/taskboard/urls";
import { alertConfirmSubTask } from "@saleor/taskboard/utils";
import { mapEdgesToItems } from "@saleor/utils/maps";
import React, { useMemo, useState } from "react";
import { useIntl } from "react-intl";

import ModalSubTask from "../ModalSubTask";
import SubTask from "../SubTask";
import Task from "../Task";
import TaskComment from "../TaskComment";
import TaskDetailSidebar from "../TaskDetailSidebar";
import TaskHistory from "../TaskHistory";
import { useStyles } from "./style";

interface SwitchSelectorButtonOptions {
  label: string | React.ReactNode;
  value: string;
}

interface ITaskDetailProps {
  taskDetail: any;
  refetch: () => void;
}

export interface IFormSubTaskApprove {
  approval: string;
  reason: string;
}

const OPTIONS: SwitchSelectorButtonOptions[] = [
  {
    label: "Task Comment",
    value: "1",
  },
  {
    label: "Task History",
    value: "2",
  },
];

const TaskDetailPage: React.FC<ITaskDetailProps> = ({
  taskDetail,
  refetch,
}) => {
  const [active, setActive] = useState<string>("1");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [dataModalSubTask, setDataModalSubTask] = useState(null);

  const intl = useIntl();
  const classes = useStyles();

  const { data } = useGetUserQuery();
  const resultEdgesUser = useMemo(
    () => mapEdgesToItems(data?.User_connection) || [],
    [data?.User_connection],
  );

  const [submitTaskMutation] = useSubmitTaskMutation({
    onCompleted: async () => {
      await alertConfirmSubTask("success", "Submit Success!");
      refetch();
    },
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleConfirm = async (
    formValue: IFormSubTaskApprove,
    formId: number,
    taskId: number,
  ) => {
    setLoading(true);
    await submitTaskMutation({
      variables: {
        value: formValue,
        formId,
        taskId,
      },
    });
    setLoading(false);
  };

  const handleChooseActivity = value => {
    setActive(value);
  };

  const activeTask = useMemo(() => {
    const active = taskDetail?.Tasks?.find(e => e.isActive);
    return active;
  }, [taskDetail]);

  const handleOpenModalSubTask = id => {
    setModalOpen(true);
    setDataModalSubTask(taskDetail.Tasks.find(item => item.id === id));
  };

  return (
    <Container>
      <Backlink>{intl.formatMessage(sectionNames.tasks)}</Backlink>
      <Grid>
        <div>
          <Task task={taskDetail} />
          {/* <Attachments /> */}
          {activeTask && (
            <SubTask
              task={activeTask}
              submitTaskMutation={handleConfirm}
              loading={loading}
            ></SubTask>
          )}
          <List className={classes.subTaskList}>
            <h2 className={classes.subTaskTitle}>Sub Tasks</h2>
            {taskDetail?.Tasks?.map(subtask => {
              return (
                <>
                  <ListItem
                    key={subtask.id}
                    className={classes.subTaskContainer}
                  >
                    <ListItemText
                      primary={subtask.title}
                      style={{ width: "35%" }}
                      onClick={() => handleOpenModalSubTask(subtask.id)}
                    />
                    <ListItemText
                      style={{ width: "30%" }}
                      primary={
                        subtask.state && (
                          <Pill label={subtask.state} color="warning" />
                        )
                      }
                      onClick={() => handleOpenModalSubTask(subtask.id)}
                    />
                    <ListItemText
                      style={{ width: "15%" }}
                      primary={
                        subtask.status && (
                          <Pill label={subtask.status} color="success" />
                        )
                      }
                      onClick={() => handleOpenModalSubTask(subtask.id)}
                    />
                    <ListItemText
                      primary={subtask.priority}
                      style={{ width: "5%" }}
                      onClick={() => handleOpenModalSubTask(subtask.id)}
                    />
                    <ListItemAvatar style={{ width: "5%" }}>
                      <UserChip user={subtask.User} />
                    </ListItemAvatar>
                  </ListItem>
                </>
              );
            })}
          </List>
          <ModalSubTask
            modalOpen={modalOpen}
            onModalOpen={setModalOpen}
            dataModalSubTask={dataModalSubTask}
            resultEdgesUser={resultEdgesUser}
          />
          <div className={classes.attach}></div>
          <div className={classes.activities}>
            <SwitchSelector>
              {OPTIONS.map(({ label, value }) => (
                <SwitchSelectorButton
                  value={value}
                  onClick={() => handleChooseActivity(value)}
                  activeTab={active}
                >
                  {label}
                </SwitchSelectorButton>
              ))}
            </SwitchSelector>
            {active === "1" ? (
              <TaskComment task={taskDetail} />
            ) : (
              <TaskHistory history={taskDetail.EventLogs} />
            )}
          </div>
        </div>
        <div>
          <TaskDetailSidebar task={taskDetail} />
        </div>
      </Grid>
    </Container>
  );
};

export default TaskDetailPage;
