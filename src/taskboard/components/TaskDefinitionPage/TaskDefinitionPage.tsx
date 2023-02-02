import { Typography } from "@material-ui/core";
import { Backlink } from "@saleor/components/Backlink";
import { Container } from "@saleor/components/Container";
import { DateTime } from "@saleor/components/Date";
import Grid from "@saleor/components/Grid";
import PageHeader from "@saleor/components/PageHeader";
import { sectionNames } from "@saleor/intl";
import { taskListUrl } from "@saleor/taskboard/urls";
import React from "react";
import { useIntl } from "react-intl";

import { useStyles } from "./style";

interface ITaskDefinitionProps {
  TaskDefinition: any;
}

const TaskDefinitionPage: React.FC<ITaskDefinitionProps> = ({
  TaskDefinition,
}) => {
  const intl = useIntl();
  const classes = useStyles();

  return (
    <Container>
      <Backlink href={taskListUrl()}>
        {intl.formatMessage(sectionNames.tasks)}
      </Backlink>
      <PageHeader
        className={classes.header}
        inline
        title={
          <div className={classes.container}>
            <span>Hello</span>
          </div>
        }
      />
      <div className={classes.date}>
        <Typography variant="body2">
          <DateTime date={TaskDefinition.dueDate} />
        </Typography>
      </div>
      <Grid>hello</Grid>
    </Container>
  );
};

export default TaskDefinitionPage;
