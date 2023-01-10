import { Modal, Typography } from "@material-ui/core";
import Attachment from "@saleor/components/Attachment";
import { Backlink } from "@saleor/components/Backlink";
import { Container } from "@saleor/components/Container";
import { DateTime } from "@saleor/components/Date";
import FileViewer from "@saleor/components/FileViewer/FileViewer";
import Form from "@saleor/components/Form";
import Grid from "@saleor/components/Grid";
import Metadata, { MetadataFormData } from "@saleor/components/Metadata";
import PageHeader from "@saleor/components/PageHeader";
import { Savebar } from "@saleor/components/Savebar";
import useNavigator from "@saleor/hooks/useNavigator";
import { sectionNames } from "@saleor/intl";
import {
  CloseIcon,
  SwitchSelector,
  SwitchSelectorButton,
} from "@saleor/macaw-ui";
import { histories } from "@saleor/tasks/__mock__/Task";
import { taskListUrl } from "@saleor/tasks/urls";
import useMetadataChangeTrigger from "@saleor/utils/metadata/useMetadataChangeTrigger";
import React, { useState } from "react";
import { useIntl } from "react-intl";

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
  // eslint-disable-next-line no-console
  console.log("🚀 ~ file: TaskDetailPage.tsx:43 ~ taskDetail", taskDetail);
  const [active, setActive] = useState<string>("1");
  const [openModal, setOpenModal] = useState<boolean>(false);
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
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Form confirmLeave initial={initial}>
      {({ change, data, submit }) => {
        const changeMetadata = makeMetadataChangeHandler(change);
        return (
          <Container>
            <Backlink href={taskListUrl()}>
              {intl.formatMessage(sectionNames.tasks)}
            </Backlink>
            <PageHeader className={classes.header} inline title={<Title />} />
            <div className={classes.date}>
              <Typography variant="body2">
                <DateTime date={"2022-12-15T11:07:55.916944+00:00"} />
              </Typography>
              {/* <Skeleton style={{ width: "10em" }} /> */}
            </div>
            <Grid>
              <div>
                <SubTask />
                <Task />
                <div className={classes.attach}>
                  <Modal
                    open={openModal}
                    onClose={handleCloseModal}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                  >
                    <div className={classes.modalContent}>
                      <CloseIcon
                        onClick={handleCloseModal}
                        className={classes.btnClose}
                      />
                      <FileViewer
                        docs={[
                          {
                            uri:
                              "https://img.lovepik.com/element/40132/3240.png_300.png",
                          },
                        ]}
                      />
                    </div>
                  </Modal>
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
                          click={handleOpenModal}
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
