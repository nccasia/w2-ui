/* eslint-disable no-console */
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import Attachment from "@saleor/components/Attachment";
import { Backlink } from "@saleor/components/Backlink";
import { Container } from "@saleor/components/Container";
import CustomAvatar from "@saleor/components/CustomAvatar/CustomAvatar";
import CustomModal from "@saleor/components/CustomModal/CustomModal";
import { DateTime } from "@saleor/components/Date";
// import FileViewer from "@saleor/components/FileViewer/FileViewer";
import Form from "@saleor/components/Form";
import Grid from "@saleor/components/Grid";
import Metadata, { MetadataFormData } from "@saleor/components/Metadata";
import PageHeader from "@saleor/components/PageHeader";
import { Savebar } from "@saleor/components/Savebar";
import useNavigator from "@saleor/hooks/useNavigator";
import { sectionNames } from "@saleor/intl";
import {
  // CloseIcon,
  SwitchSelector,
  SwitchSelectorButton,
} from "@saleor/macaw-ui";
import { histories } from "@saleor/tasks/__mock__/Task";
import { taskListUrl } from "@saleor/tasks/urls";
import useMetadataChangeTrigger from "@saleor/utils/metadata/useMetadataChangeTrigger";
import { bridge } from "@saleor/utils/schema";
import React, { useState } from "react";
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
  // const [openModal, setOpenModal] = useState<boolean>(false);
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

  const {
    makeChangeHandler: makeMetadataChangeHandler,
  } = useMetadataChangeTrigger();

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

  return (
    <Form confirmLeave initial={initial}>
      {({ change, data, submit }) => {
        const changeMetadata = makeMetadataChangeHandler(change);
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
              {/* <Skeleton style={{ width: "10em" }} /> */}
            </div>
            <Grid>
              <div>
                <Task task={taskDetail} />
                {false &&
                  taskDetail?.Tasks.map(submap => {
                    return <SubTask task={submap} />;
                  })}
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
                        <ListItemText primary={e.id} />
                        <ListItemText primary={e.title} />
                        <CustomAvatar id={taskDetail.creatorId} />
                        <Title
                          props={{
                            status: taskDetail.status,
                          }}
                        />
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
                  <Typography
                    variant="subtitle1"
                    className={classes.attachTitle}
                  >
                    Attachments (4)
                  </Typography>
                  <div className={classes.attachments}>
                    {[23423, 4, 324, 32, 2, 43, 24, 32, 4, 4, 324, 32].map(
                      (_item, index) => (
                        <Attachment
                          click={() => true}
                          key={index}
                          nameFile={"IMAGE"}
                          timeFile={String(new Date().toLocaleString())}
                          image={
                            "https://c.wallhere.com/images/fd/4f/a4f4e213733ee862dddde0e304ae-1567069.jpg!d"
                          }
                        />
                      ),
                    )}
                  </div>
                </div>
                <Metadata data={data} onChange={changeMetadata} />
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
                    <TaskComment />
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
