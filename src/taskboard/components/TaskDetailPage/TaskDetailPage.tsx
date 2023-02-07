import { List, ListItemAvatar, ListItemText } from "@material-ui/core";
import { useUser } from "@saleor/auth";
import { Backlink } from "@saleor/components/Backlink";
import { Container } from "@saleor/components/Container";
import { FormSchema } from "@saleor/components/FormSchema/FormSchema";
import Grid from "@saleor/components/Grid";
import UserChip from "@saleor/components/UserChip";
import { useSubmitTaskMutation } from "@saleor/graphql";
import { sectionNames } from "@saleor/intl";
import {
  Accordion,
  AccordionSummary,
  SwitchSelector,
  SwitchSelectorButton,
} from "@saleor/macaw-ui";
import { taskListUrl } from "@saleor/taskboard/urls";
import { alertConfirmSubTask } from "@saleor/taskboard/utils";
import { createRelayId } from "@saleor/utils/createRelayId";
import clsx from "clsx";
import React, { useMemo, useState } from "react";
import { useIntl } from "react-intl";

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
    label: "Task History",
    value: "1",
  },
  {
    label: "Task Comment",
    value: "2",
  },
];

const TaskDetailPage: React.FC<ITaskDetailProps> = ({
  taskDetail,
  refetch,
}) => {
  const [active, setActive] = useState<string>("1");
  const intl = useIntl();
  const classes = useStyles();

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
  const user = useUser();
  return (
    <Container>
      <Backlink href={taskListUrl(undefined, user?.user?.userId)}>
        {intl.formatMessage(sectionNames.tasks)}
      </Backlink>
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
          <List>
            <h2>Sub Tasks</h2>
            {taskDetail?.Tasks?.map(subtask => {
              return (
                <Accordion
                  className={clsx([
                    classes.subTaskItem,
                    classes.subTaskContainer,
                  ])}
                >
                  <AccordionSummary key={subtask.id}>
                    <ListItemText primary={subtask.title} />
                    <ListItemText primary={subtask.state} />
                    <ListItemText primary={subtask.status} />
                    <ListItemText primary={subtask.priority} />
                    <ListItemAvatar>
                      <UserChip user={taskDetail.userByCreatorid} />
                    </ListItemAvatar>
                  </AccordionSummary>
                  <FormSchema
                    formId={createRelayId([
                      1,
                      "public",
                      "Form",
                      subtask.formId,
                    ])}
                    readonly={true}
                    modelData={subtask?.Form?.values}
                  />
                </Accordion>
              );
            })}
          </List>
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
              <TaskHistory history={taskDetail.EventLogs} />
            ) : (
              <TaskComment task={taskDetail} />
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
