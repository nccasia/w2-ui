import { Typography } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import QuillEditor, { QuillEditorProps } from "@saleor/components/QuillEditor";
import { Button, makeStyles } from "@saleor/macaw-ui";
import React from "react";

const useStyles = makeStyles(
  theme => ({
    containerQuillEditor: {
      width: "98%",
      margin: "0 auto",
      marginBottom: theme.spacing(8),
    },
    title: {
      display: "flex",
      alignItems: "flex-end",
      gap: 4,
    },
    quillTitle: {
      fontWeight: "bold",
      color: "gray",
    },
    editIcon: {
      cursor: "pointer",
      fontSize: 20,
    },
    listButtonQuillEditor: {
      display: "flex",
      justifyContent: "flex-start",
      gap: "24px",
    },
  }),
  { name: "EditQuillEditor" },
);

interface EdiiQuillEditorProps extends QuillEditorProps {
  handleEdit: () => void;
  handleSave: () => void;
  handleCancel: () => void;
  title: string | null;
}

const EditQuillEditor: React.FC<EdiiQuillEditorProps> = ({
  key,
  modules,
  edit,
  onChange,
  value,
  handleEdit,
  handleCancel,
  handleSave,
  title,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.containerQuillEditor}>
      <div className={classes.title}>
        <Typography className={classes.quillTitle} variant="subtitle2">
          {title}
        </Typography>
        <EditIcon onClick={() => handleEdit()} className={classes.editIcon} />
      </div>
      <QuillEditor
        value={value}
        key={key}
        modules={modules}
        edit={edit}
        onChange={onChange}
      />
      {!edit && (
        <div className={classes.listButtonQuillEditor}>
          <Button variant="secondary" onClick={() => handleCancel()}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => handleSave()}>
            Save
          </Button>
        </div>
      )}
    </div>
  );
};

export default EditQuillEditor;
