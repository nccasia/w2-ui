/* eslint-disable no-console */
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { useStyles } from "@saleor/apps/styles";
import { Backlink } from "@saleor/components/Backlink";
import { Container } from "@saleor/components/Container";
import CustomAvatar from "@saleor/components/CustomAvatar/CustomAvatar";
import CustomModal from "@saleor/components/CustomModal/CustomModal";
import { DateTime } from "@saleor/components/Date";
import Form from "@saleor/components/Form";
import Grid from "@saleor/components/Grid";
import { MetadataFormData } from "@saleor/components/Metadata";
import PageHeader from "@saleor/components/PageHeader";
import { Savebar } from "@saleor/components/Savebar";
import useNavigator from "@saleor/hooks/useNavigator";
import { sectionNames } from "@saleor/intl";
import { SwitchSelector, SwitchSelectorButton } from "@saleor/macaw-ui";
import { histories } from "@saleor/taskboard/__mock__/Task";
import TaskComment from "@saleor/taskboard/components/TaskComment";
import TaskDetailSidebar from "@saleor/taskboard/components/TaskDetailSidebar";
import TaskHistory from "@saleor/taskboard/components/TaskHistory";
import { taskListUrl } from "@saleor/taskboard/urls";
import { bridge } from "@saleor/utils/schema";
import React, { useMemo, useState } from "react";
import { useIntl } from "react-intl";
import { AutoForm } from "uniforms-material";

import SubTask from "../SubTask/SubTask";
import Task from "../Task/Task";
import Title from "./Title";

interface SwitchSelectorButtonOptions {
  label: string | React.ReactNode;
  value: string;
}

interface ITaskDetailProps {
  taskDetail: any;
}

const TaskDetailPage: React.FC<ITaskDetailProps> = ({ taskDetail }) => {
  const [active, setActive] = useState<string>("1");
  const [openModalSubtask, setOpenModalSubtask] = useState<boolean>(false);
  const intl = useIntl();
  const classes = useStyles();
  const navigate = useNavigator();

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

  const initial: MetadataFormData = {
    metadata: [],
    privateMetadata: [],
  };

  const handleOpenModal = () => {
    setOpenModalSubtask(true);
  };

  // const handleCloseModal = () => {
  //   setOpenModal(false);
  // };

  const activeTask = useMemo(() => {
    const active = taskDetail?.Tasks[0];
    return active;
  }, [taskDetail]);

  return (
    <Form confirmLeave initial={initial}>
      {({ submit }) => {
        return (
          <Container>
            <Backlink href={taskListUrl()}>
              {intl.formatMessage(sectionNames.tasks)}
            </Backlink>
            <PageHeader
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
            />
            <div className={classes.date}>
              <Typography variant="body2">
                <DateTime date={taskDetail.dueDate} />
              </Typography>
            </div>
            <Grid>
              <div>
                <Task task={taskDetail} />
                {/* <Attachments /> */}
                {activeTask && <SubTask task={activeTask}></SubTask>}
                <List>
                  <h2>Sub Tasks</h2>
                  {taskDetail?.Tasks.map(e => {
                    return (
                      <ListItem
                        button
                        key={e.id}
                        className={classes.subTaskItem}
                        onClick={handleOpenModal}
                      >
                        <ListItemAvatar>
                          <Avatar>
                            <CustomAvatar id={taskDetail.creatorId} />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={e.title} />
                        <ListItemText primary={e.title} />
                        <ListItemText primary={e.title} />
                      </ListItem>
                    );
                  })}
                </List>
                <div className={classes.attach}>
                  <CustomModal
                    openModal={openModalSubtask}
                    setOpenModal={setOpenModalSubtask}
                  >
                    <AutoForm schema={bridge} onSubmit={console.log} />
                  </CustomModal>
                </div>
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
            <Savebar
              state="success"
              labels={undefined}
              onCancel={() => navigate(taskListUrl())}
              onSubmit={submit}
              disabled={false}
            />
          </Container>
        );
      }}
    </Form>
  );
};

export default TaskDetailPage;
