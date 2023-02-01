import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { Backlink } from "@saleor/components/Backlink";
import { Container } from "@saleor/components/Container";
import CustomAvatar from "@saleor/components/CustomAvatar/CustomAvatar";
import { FormSchema } from "@saleor/components/FormSchema/FormSchema";
import Grid from "@saleor/components/Grid";
import { useSubmitTaskMutation } from "@saleor/graphql";
import { sectionNames } from "@saleor/intl";
import {
  Accordion,
  AccordionSummary,
  SwitchSelector,
  SwitchSelectorButton,
} from "@saleor/macaw-ui";
import { histories } from "@saleor/taskboard/__mock__/Task";
import { taskListUrl } from "@saleor/taskboard/urls";
import { alertConfirmSubTask } from "@saleor/taskboard/utils";
import { createRelayId } from "@saleor/utils/createRelayId";
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

const TaskDetailPage: React.FC<ITaskDetailProps> = ({
  taskDetail,
  refetch,
}) => {
  const [active, setActive] = useState<string>("1");
  const intl = useIntl();
  const classes = useStyles();

  const [submitTaskMutation] = useSubmitTaskMutation({
    onCompleted: () => {
      alertConfirmSubTask("success", "Submit Success!");
      refetch();
    },
  });

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

  const handleChooseActivity = value => {
    setActive(value);
  };

  const activeTask = useMemo(() => {
    const active = taskDetail?.Tasks?.find(e => e.isActive);
    return active;
  }, [taskDetail]);

  return (
    <Container>
      <Backlink href={taskListUrl()}>
        {intl.formatMessage(sectionNames.tasks)}
      </Backlink>
      {/* <PageHeader
        className={classes.header}
        inline
        title={
          <Title
            props={{
              title: taskDetail.title,
              status: taskDetail.status,
            }}
          />
        }
        // cardMenu={<RightMenu />}
      />
      <div className={classes.date}>
        <Typography variant="body2">
          <DateTime date={taskDetail.dueDate} />
        </Typography>
      </div> */}
      <Grid>
        <div>
          <Task task={taskDetail} />
          {/* <Attachments /> */}
          {activeTask && (
            <SubTask
              task={activeTask}
              submitTaskMutation={submitTaskMutation}
            ></SubTask>
          )}
          <List>
            <h2>Sub Tasks</h2>
            {taskDetail?.Tasks?.map(subtask => {
              return (
                <Accordion
                  className={classes.subTaskItem}
                  style={{ boxShadow: "0 0 2px 1px #999" }}
                >
                  <AccordionSummary key={subtask.id}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <CustomAvatar id={taskDetail.creatorId} />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={subtask.title} />
                      <ListItemText primary={subtask.state} />
                      <ListItemText primary={subtask.status} />
                      <ListItemText primary={subtask.priority} />
                    </ListItem>
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
              <TaskHistory history={histories} />
            ) : (
              <TaskComment task={taskDetail} />
            )}
          </div>
        </div>
        <div>
          <TaskDetailSidebar />
        </div>
      </Grid>
    </Container>
  );
};

export default TaskDetailPage;
