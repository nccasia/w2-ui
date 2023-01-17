import { useGetRadioList } from "@saleor/hooks/useGetRadioList";
import { makeStyles } from "@saleor/macaw-ui";
import React from "react";
import { useField } from "uniforms";
import { AutoFieldProps, RadioField } from "uniforms-material";

const useStyles = makeStyles(
  () => ({
    root: {
      "& .MuiFormControl-root": {
        margin: "20px 10px",
      },
      "& .MuiFormControl-root>.MuiFormGroup-root": {
        flexDirection: "initial !important",
        gap: 50,
        marginTop: "7px",
      },
      "& .MuiFormGroup-root label": {
        padding: "0 10px 0 0",
        borderRadius: "4px",
        boxShadow: "0 0 2px 1px #999",
      },
    },
  }),
  { name: "RadioConfirmSubtask" },
);

type Props = AutoFieldProps;

const RadioConfirmSubtask: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const [fieldProps] = useField(props.name, props);
  const { options } = useGetRadioList(fieldProps?.field?.uniforms?.resource);

  return (
    <div className={classes.root}>
      <RadioField {...props} allowedValues={options} />
    </div>
  );
};

export default RadioConfirmSubtask;
