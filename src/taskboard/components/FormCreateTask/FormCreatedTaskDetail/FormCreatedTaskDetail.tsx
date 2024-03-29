import { FormSchema } from "@saleor/components/FormSchema/FormSchema";
import { makeStyles } from "@saleor/macaw-ui";
import React from "react";

interface Props {
  formId: string;
  onNewRequest: (data: any) => void;
}

const useStyles = makeStyles(
  theme => ({
    root: {
      marginTop: "30px",
      "& > *": {
        margin: "0 0 20px 0",
      },
      "& .MuiOutlinedInput-inputMarginDense": {
        paddingTop: "25px!important",
        paddingBottom: "10px!important",
      },
      "& .MuiButton-contained": {
        float: "right",
        // background: "#333",
        // border: "none",
        // color: "#fff",
        marginTop: 20,
      },
      "& .MuiButtonBase-root": {
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: theme.palette.type === "dark" ? "#fff" : "#333",
        color: theme.palette.type === "dark" ? "#333" : "#fff",
        background: theme.palette.type === "dark" ? "#fff" : "#333",
        "&:hover": {
          borderColor: theme.palette.type === "dark" ? "#fff" : "#333",
          color: theme.palette.type === "dark" ? "#fff" : "#333",
          background: theme.palette.type === "dark" ? "#333" : "#fff",
        },
      },
      "& .MuiListSubheader-root": {
        fontSize: 16,
        lineHeight: 0,
        paddingLeft: 0,
      },
      "& .MuiListItem-root, .MuiListItem-gutters": {
        cursor: "pointer",
        paddingLeft: 0,
        paddingRight: 0,
      },
      "& .MuiListItem-root>.MuiFormControl-root": {
        display: "contents!important",
      },
      "& .MuiListItem-root>.MuiButtonBase-root": {
        padding: "15px 10px",
        background: "#555",
      },
    },
  }),
  { name: "FormCreatedTaskDetail" },
);

const FormCreatedTaskDetail: React.FC<Props> = ({ formId, onNewRequest }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <FormSchema formId={formId} onSubmit={newR => onNewRequest(newR)} />
    </div>
  );
};

export default FormCreatedTaskDetail;
