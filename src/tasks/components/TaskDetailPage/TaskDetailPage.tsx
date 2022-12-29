import { Typography } from "@material-ui/core";
import { Backlink } from "@saleor/components/Backlink";
import { Container } from "@saleor/components/Container";
import { DateTime } from "@saleor/components/Date";
import Form from "@saleor/components/Form";
import Grid from "@saleor/components/Grid";
import { MetadataFormData } from "@saleor/components/Metadata";
import PageHeader from "@saleor/components/PageHeader";
import { sectionNames } from "@saleor/intl";
import { taskListUrl } from "@saleor/tasks/urls";
import React from "react";
import { useIntl } from "react-intl";

import SubTask from "../SubTask";
import Task from "../Task";
import { useStyles } from "./style";
import Title from "./Title";

const TaskDetailPage = () => {
  const intl = useIntl();
  const classes = useStyles();

  const initial: MetadataFormData = {
    metadata: [],
    privateMetadata: [],
  };

  return (
    <Form confirmLeave initial={initial}>
      {() => (
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
            </div>
          </Grid>
        </Container>
      )}
    </Form>
  );
};

export default TaskDetailPage;
