import { Pill } from "@saleor/macaw-ui";
import React from "react";
import { useIntl } from "react-intl";

import { useStyles } from "./style";

const Title = () => {
  const intl = useIntl();
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {intl.formatMessage({
        id: "0wJ7N+",
        defaultMessage: "Task",
      })}
      <div>
        <Pill label={"PROGRESS"} color={"success"} />
      </div>
    </div>
  );
};

export default Title;
