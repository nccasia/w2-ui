import Button from "@material-ui/core/Button";
import { useStyles } from "@saleor/apps/styles";
import { iconModal } from "@saleor/styles/modal";
import React from "react";
import { AutoField, AutoForm, LongTextField } from "uniforms-material";

import { bridge as schema } from "./schema";
// https://github.com/vazco/uniforms/issues/750#issuecomment-646588538

interface Props {
  fieldTask: string;
  onNewRequest: (data: any, type: string) => void;
}

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

const GeneralnewTask: React.FC<Props> = ({ fieldTask, onNewRequest }) => {
  const classes = useStyles();
  return (
    <AutoForm
      model={{
        currentOffice: "HN1",
        destinationOffice: "HN1",
      }}
      schema={schema}
      onSubmit={newR => onNewRequest(newR, fieldTask)}
    >
      <div className={classes.root}>
        {fieldTask === "Q2hhbm5lbDoxMg==" && (
          <>
            <AutoField name="currentOffice" options={professions} />
            <AutoField name="destinationOffice" options={professions} />
          </>
        )}
        <AutoField name="createDate" />

        {/* field createDate với type data gặp lỗi chưa tìm ra cách fix */}
        {/* <DateField name="createDate" type="date" /> */}

        <LongTextField name="content" /* component={QuillEditor} */ />
      </div>
      <div style={iconModal}>
        <>&nbsp;</>
        <Button type="submit" variant="contained" color="primary">
          SAVE
        </Button>
      </div>
    </AutoForm>
  );
};

export default GeneralnewTask;
