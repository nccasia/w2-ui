import useListSettings from "@saleor/hooks/useListSettings";
import { createPaginationState } from "@saleor/hooks/usePaginator";
import { sectionNames } from "@saleor/intl";
import { ListViews, Pagination } from "@saleor/types";
import { asSortParams } from "@saleor/utils/sort";
import { parse as parseQs } from "qs";
import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useHistory } from "react-router";
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
  workFlowSectionUrl,
} from "./urls";
import TaskDefinitionComponent from "./views/TaskDefinition";
import TaskDetailsComponent from "./views/TaskDetails";
import TaskListComponent from "./views/TaskList";
import { WorkFlow } from "./views/Workflow";

const TaskLists: React.FC<RouteComponentProps<any>> = ({ location, match }) => {
  const [qs, setQs] = useState<Pagination>({});
  const id = match.params.id;
  const { settings } = useListSettings(ListViews.TASK_LIST);

  const history = useHistory();

  const [rowNumberValue, setRowNumberValue] = useState<number>(
    settings.rowNumber,
  );

  useEffect(() => {
    setRowNumberValue(settings.rowNumber);
  }, [settings.rowNumber]);

  useEffect(() => {
    setQs(parseQs(location.search.substr(1)));
  }, [location]);

  useEffect(() => {
    setQs({});
    history.replace({
      search: "",
    });
  }, [rowNumberValue]);

  const params: TaskListUrlQueryParams = asSortParams(
    qs as any,
    TaskListUrlSortField,
    TaskListUrlSortField.number,
    false,
  );

  const qsFilter = parseQs(location.search.substr(1));
  const paramsFilter: TaskListUrlQueryParams = asSortParams(
    qsFilter,
    TaskListUrlSortField,
  );

  const paginationState = createPaginationState(rowNumberValue, qs);

  return (
    <TaskListComponent
      qs={qs}
      setQs={setQs}
      params={params}
      paramsFilter={paramsFilter}
      id={id}
      setRowNumber={setRowNumberValue}
      variables={paginationState}
    />
  );
};

const TaskDetails: React.FC<RouteComponentProps<any>> = ({
  location,
  match,
}) => {
  const qs = parseQs(location.search.substr(1));
  const params: any = qs;
  const id = match.params.id;

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
        <Route path={workFlowSectionUrl} component={WorkFlow} />
        <Route path={taskPath(":id")} component={TaskDetails} />
        <Route path={taskBoardPath(":id")} component={TaskLists} />
        <Route path={taskPath(":id?")} component={TaskDetails} />
      </Switch>
    </>
  );
};

export default Component;
