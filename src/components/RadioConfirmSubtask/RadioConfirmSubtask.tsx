import { useGetRadioList } from "@saleor/hooks/useGetRadioList";
import React from "react";
import { useField } from "uniforms";
import { AutoFieldProps, RadioField } from "uniforms-material";

import { useStyles } from "../../taskboard/components/TaskDetailPage/style";

type Props = AutoFieldProps;

const RadioConfirmSubtask: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const [fieldProps] = useField(props.name, props);
  const { options } = useGetRadioList(fieldProps?.field?.uniforms?.resource);

  return (
    <div className={classes.subTaskItem}>
      <RadioField {...props} allowedValues={options} />
    </div>
  );
};

export default RadioConfirmSubtask;
