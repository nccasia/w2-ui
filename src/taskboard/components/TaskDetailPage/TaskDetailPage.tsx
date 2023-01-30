/* eslint-disable no-console */
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { Backlink } from "@saleor/components/Backlink";
import { Container } from "@saleor/components/Container";
import CustomAvatar from "@saleor/components/CustomAvatar/CustomAvatar";
import CustomModal from "@saleor/components/CustomModal/CustomModal";
import { DateTime } from "@saleor/components/Date";
import Grid from "@saleor/components/Grid";
import PageHeader from "@saleor/components/PageHeader";
import { sectionNames } from "@saleor/intl";
import { SwitchSelector, SwitchSelectorButton } from "@saleor/macaw-ui";
import { histories } from "@saleor/taskboard/__mock__/Task";
import { taskListUrl } from "@saleor/taskboard/urls";
import { bridge } from "@saleor/utils/schema";
import React, { useMemo, useState } from "react";
import { useIntl } from "react-intl";
import { AutoForm } from "uniforms-material";

import SubTask from "../SubTask";
import Task from "../Task";
import TaskComment from "../TaskComment";
import TaskDetailSidebar from "../TaskDetailSidebar";
import TaskHistory from "../TaskHistory";
import { useStyles } from "./style";
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

  const handleOpenModal = () => {
    setOpenModalSubtask(true);
  };

  // const handleCloseModal = () => {
  //   setOpenModal(false);
  // };

  const activeTask = useMemo(() => {
    const active = taskDetail?.Tasks?.find(e => e.isActive);
    return active;
  }, [taskDetail]);

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
        // cardMenu={<RightMenu />}
      />
      <div className={classes.date}>
        <Typography variant="body2">
          <DateTime date={taskDetail.dueDate} />
        </Typography>
        {/* <Skeleton style={{ width: "10em" }} /> */}
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
                  <ListItemText primary={e.state} />
                  <ListItemText primary={e.status} />
                  <ListItemText primary={e.priority} />
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
    </Container>
  );
};

export default TaskDetailPage;
