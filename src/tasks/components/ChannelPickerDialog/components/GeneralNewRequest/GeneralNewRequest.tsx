/* eslint-disable no-console */
import Button from "@material-ui/core/Button";
import { useStyles } from "@saleor/apps/styles";
import { iconModal } from "@saleor/styles/modal";
import React from "react";
import { AutoField, AutoForm, ErrorField } from "uniforms-material";

import { bridge as schema } from "./schema";
// https://github.com/vazco/uniforms/issues/750#issuecomment-646588538

export default function GeneralnewTask() {
  const classes = useStyles();
  return (
    <AutoForm schema={schema} onSubmit={console.log}>
      <form className={classes.root}>
        <AutoField name="currentOffice" />
        <ErrorField name="currentOffice" />
        <AutoField name="destinationOffice" />
        <ErrorField name="destinationOffice" />
        <AutoField name="content" />
        <ErrorField name="content" />
        <AutoField name="createDate" />
        <ErrorField name="createDate" />
      </form>
      <div style={iconModal}>
        <>&nbsp;</>
        <Button type="submit" variant="contained" color="primary">
          SAVE
        </Button>
      </div>
    </AutoForm>
  );
}
