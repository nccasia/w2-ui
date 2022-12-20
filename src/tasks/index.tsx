import { sectionNames } from "@saleor/intl";
import { asSortParams } from "@saleor/utils/sort";
import { parse as parseQs } from "qs";
import React from "react";
import { useIntl } from "react-intl";
import { Route, RouteComponentProps, Switch } from "react-router-dom";

import { WindowTitle } from "../components/WindowTitle";
import {
  TaskListUrlQueryParams,
  TaskListUrlSortField,
  taskSectionUrl,
} from "./urls";
import TaskListComponent from "./views/TaskList";

const TaskList: React.FC<RouteComponentProps<any>> = ({ location }) => {
  const qs = parseQs(location.search.substr(1));
  const params: TaskListUrlQueryParams = asSortParams(
    qs,
    TaskListUrlSortField,
    TaskListUrlSortField.number,
    false,
  );
  return <TaskListComponent params={params} />;
};

const Component = () => {
  const intl = useIntl();

  return (
    <>
      <WindowTitle title={intl.formatMessage(sectionNames.tasks)} />
      <Switch>
        <Route exact path={taskSectionUrl} component={TaskList} />
      </Switch>
    </>
  );
};

export default Component;
