import { Card, CardContent } from "@material-ui/core";
import CardTitle from "@saleor/components/CardTitle";
import Hr from "@saleor/components/Hr";
import React from "react";
import { useIntl } from "react-intl";

import CardContentItemSingleChoice from "./components/CardContentItemSingleChoice";

interface Props {
  task: any;
}

const TaskDetailSidebar: React.FC<Props> = ({ task }) => {
  const intl = useIntl();

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
          <CardContentItemSingleChoice
            results={task.userByCreatorid}
            title={"Requester"}
          />
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default TaskDetailSidebar;
