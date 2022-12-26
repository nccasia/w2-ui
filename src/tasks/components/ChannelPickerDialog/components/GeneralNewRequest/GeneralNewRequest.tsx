/* eslint-disable no-console */
import { useStyles } from "@saleor/apps/styles";
import React from "react";
import { AutoForm } from "uniforms-material";

import { bridge as schema } from "./schema";
// https://github.com/vazco/uniforms/issues/750#issuecomment-646588538

interface Props {
  fieldTask: string;
  onNewRequest: (data: any, type: string) => void;
}

const GeneralnewTask: React.FC<Props> = ({ fieldTask, onNewRequest }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AutoForm
        model={{
          currentOffice: "HN1",
          destinationOffice: "HN1",
        }}
        schema={schema}
        onSubmit={newR => onNewRequest(newR, fieldTask)}
      />
    </div>
  );
};

export default GeneralnewTask;
