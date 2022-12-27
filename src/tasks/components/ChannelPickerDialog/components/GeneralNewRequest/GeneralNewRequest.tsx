import { useStyles } from "@saleor/apps/styles";
import { FormSchema } from "@saleor/components/FormSchema/FormSchema";
import React from "react";

interface Props {
  formId: string;
  onNewRequest: (data: any, type: any) => void;
}

const GeneralNewRequest: React.FC<Props> = ({ formId, onNewRequest }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <FormSchema
        formId={formId}
        onSubmit={newR => onNewRequest(newR, formId)}
      />
    </div>
  );
};

export default GeneralNewRequest;
