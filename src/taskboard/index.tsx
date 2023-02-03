import { sectionNames } from "@saleor/intl";
import { asSortParams } from "@saleor/utils/sort";
import { parse as parseQs } from "qs";
import React from "react";
import { useIntl } from "react-intl";
import { Route, RouteComponentProps, Switch } from "react-router-dom";

import { WindowTitle } from "../components/WindowTitle";
import {
  taskBoardPath,
  // taskBoardSectionUrl,
  taskDefinitionPath,
  TaskListUrlQueryParams,
  TaskListUrlSortField,
  taskPath,
  // taskSectionUrl,
} from "./urls";
import TaskDefinitionComponent from "./views/TaskDefinition";
import TaskDetailsComponent from "./views/TaskDetails";
import TaskListComponent from "./views/TaskList";

const TaskLists: React.FC<RouteComponentProps<any>> = ({ location, match }) => {
  const qs = parseQs(location.search.substr(1));
  const params: TaskListUrlQueryParams = asSortParams(
    qs,
    TaskListUrlSortField,
    TaskListUrlSortField.number,
    false,
  );
  const id = match.params.id;
  return <TaskListComponent params={params} id={id} />;
};

const TaskDetails: React.FC<RouteComponentProps<any>> = ({
  location,
  match,
}) => {
  const qs = parseQs(location.search.substr(1));
  const params: any = qs;
  const id = match.params.id;
  // eslint-disable-next-line no-console
  console.log("first", id);
  return <TaskDetailsComponent id={decodeURIComponent(id)} params={params} />;
};

const TaskDefinition: React.FC<RouteComponentProps<any>> = ({
  location,
  match,
}) => {
  const qs = parseQs(location.search.substr(1));
  const params: any = qs;
  const id = match.params.id;
  return (
    <TaskDefinitionComponent id={decodeURIComponent(id)} params={params} />
  );
};

const Component = () => {
  const intl = useIntl();

  return (
    <>
      <WindowTitle title={intl.formatMessage(sectionNames.tasks)} />
      <Switch>
        {/* <Redirect exact from={taskBoardSectionUrl} to={taskSectionUrl} /> */}
        {/* <Route exact path={taskSectionUrl} component={TaskLists} /> */}
        <Route path={taskDefinitionPath()} component={TaskDefinition} />
        <Route path={taskPath(":id")} component={TaskDetails} />
        <Route path={taskBoardPath(":id")} component={TaskLists} />
      </Switch>
    </>
  );
};

export default Component;
