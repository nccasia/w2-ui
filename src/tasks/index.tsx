import { sectionNames } from "@saleor/intl";
import { parse as parseQs } from "qs";
import React from "react";
import { useIntl } from "react-intl";
import { Route, RouteComponentProps, Switch } from "react-router-dom";

import { WindowTitle } from "../components/WindowTitle";
import { taskPath, taskSectionUrl } from "./urls";
import TaskDetailsComponent from "./views/TaskDetails";
import { TaskList } from "./views/TaskList/TaskList";

const TaskDetails: React.FC<RouteComponentProps<any>> = ({
  location,
  match,
}) => {
  const qs = parseQs(location.search.substr(1));
  const params: any = qs;
  const id = match.params.id;
  return <TaskDetailsComponent id={decodeURIComponent(id)} params={params} />;
};

const Component = () => {
  const intl = useIntl();

  return (
    <>
      <WindowTitle title={intl.formatMessage(sectionNames.tasks)} />
      <Switch>
        <Route exact path={taskSectionUrl} component={TaskList} />
        <Route path={taskPath(":id")} component={TaskDetails} />
      </Switch>
    </>
  );
};

export default Component;
