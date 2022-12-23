/* eslint-disable no-console */
import { FormControl } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "@saleor/apps/styles";
import QuillEditor from "@saleor/components/QuillEditor/QuillEditor";
import { iconModal } from "@saleor/styles/modal";
import React from "react";
import { useForm } from "uniforms";
import { AutoForm, ErrorField } from "uniforms-material";

import { bridge as schema } from "./schema";
// https://github.com/vazco/uniforms/issues/750#issuecomment-646588538

const professions = [
  {
    label: "Hà Nội 1",
    value: "HN1",
  },
  {
    label: "Hà Nội 2",
    value: "HN2",
  },
  {
    label: "Hà Nội 3",
    value: "HN3",
  },
  {
    label: "Đà Nẵng",
    value: "DN",
  },
];

export default function GeneralnewTask() {
  const context = useForm();
  console.log(
    "🚀 ~ file: GeneralNewRequest.tsx:37 ~ GeneralnewTask ~ context",
    context,
  );
  const classes = useStyles();
  return (
    <AutoForm schema={schema} onSubmit={e => console.log(e)}>
      <form className={classes.root}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Current Office</InputLabel>
          <Select
            native
            name="currentOffice"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            {professions.map(item => {
              return (
                <>
                  <option value={item.value}>{item.label}</option>
                </>
              );
            })}
          </Select>
        </FormControl>
        <ErrorField name="currentOffice">
          <span>You have to provide your last name!</span>
        </ErrorField>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Destination Office
          </InputLabel>
          <Select
            native
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            {professions.map(item => {
              return (
                <>
                  <option value={item.value}>{item.label}</option>
                </>
              );
            })}
          </Select>
        </FormControl>
        <TextField
          fullWidth
          id="date"
          label="Create Date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <div>
          <b>Content</b>
          <QuillEditor value={"sad"} />
        </div>
        <TextField
          fullWidth
          label="File"
          type="file"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
      <div style={iconModal}>
        <>&nbsp;</>
        <button>SAVE</button>
      </div>
    </AutoForm>
  );
}
