import { sectionNames } from "@saleor/intl";
import React from "react";
import { useIntl } from "react-intl";
import { Route, Switch } from "react-router-dom";

import { WindowTitle } from "../components/WindowTitle";
import { taskSectionUrl } from "./urls";
import { TaskList } from "./views/TaskList/TaskList";

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
