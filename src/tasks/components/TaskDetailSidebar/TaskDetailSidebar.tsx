import { Card, CardContent } from "@material-ui/core";
import CardTitle from "@saleor/components/CardTitle";
import Hr from "@saleor/components/Hr";
import { makeStyles } from "@saleor/macaw-ui";
import { choices } from "@saleor/tasks/__mock__/Task";
import { useMockAutocomplete } from "@saleor/tasks/utils";
import React from "react";
import { useIntl } from "react-intl";

import CardContentItemInput from "./components/CardContentItemInput";
import CardContentItemMultipleChoice from "./components/CardContentItemMultipleChoice";
import CardContentItemSingleChoice from "./components/CardContentItemSingleChoice";

const useStyles = makeStyles(
  theme => ({
    range: {
      marginTop: theme.spacing(5),
    },
  }),
  { name: "TaskDetailSidebar" },
);

const TaskDetailSidebar = () => {
  const intl = useIntl();
  const { results, search } = useMockAutocomplete(choices);
  const classes = useStyles();
  return (
    <React.Fragment>
      <Card>
        <CardTitle
          title={intl.formatMessage({
            id: "lio5pz",
            defaultMessage: "Detail",
            description: "section header",
          })}
        />
        <Hr />
        <CardContent>
          <CardContentItemMultipleChoice
            results={results}
            search={search}
            title={"Requester"}
          />
          <CardContentItemMultipleChoice
            results={results}
            search={search}
            title={"Assignee"}
          />
          <CardContentItemMultipleChoice
            results={results}
            search={search}
            title={"Reporter"}
          />
          <CardContentItemSingleChoice
            results={results}
            search={search}
            title={"Labels"}
          />
          <CardContentItemInput value="2d 4h" title="Original estimate" />
        </CardContent>
      </Card>
      <Card className={classes.range}>
        <CardTitle
          title={intl.formatMessage({
            id: "YAruc9",
            defaultMessage: "More field",
            description: "section header",
          })}
        />
        <Hr />
        <CardContent>
          <CardContentItemMultipleChoice
            results={results}
            search={search}
            title={"Reporter"}
          />
          <CardContentItemSingleChoice
            results={results}
            search={search}
            title={"Labels"}
          />
          <CardContentItemInput title="Original estimate" />
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default TaskDetailSidebar;
