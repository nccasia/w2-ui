import { TextField, Typography } from "@material-ui/core";
import {
  CheckboxSmallIcon,
  CloseSmallIcon,
  makeStyles,
} from "@saleor/macaw-ui";
import React, { useState } from "react";

const useStyles = makeStyles(
  theme => ({
    root: {
      height: "100px",
    },
    container: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      marginTop: theme.spacing(5),
    },
    containerTitle: {
      width: "30%",
      color: "#969696",
    },
    title: {
      fontWeight: "bold",
    },
    containerInfo: {
      overflow: "hidden",
      width: "70%",
    },
    inputInfo: {
      width: "100%",
      fontSize: "15px",
      color: "#969696",
    },
    listButton: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: theme.spacing(1),
      zIndex: 9999,
      transitionDuration: "0.3s",
    },
    btn: {
      border: "1px solid #969696",
      borderRadius: "5px",
      cursor: "pointer",
    },
  }),
  { name: "CardContentItemInput" },
);

interface CardContentItemInputProps {
  title: string | null;
  value?: string | null;
}

const CardContentItemInput: React.FC<CardContentItemInputProps> = ({
  title,
  value,
}) => {
  const [edit, setEdit] = useState(false);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.containerTitle}>
          <Typography className={classes.title} variant="subtitle2">
            {title}
          </Typography>
        </div>
        <div className={classes.containerInfo}>
          <TextField
            onClick={() => {
              setEdit(true);
            }}
            defaultValue={value}
            label={title}
            className={classes.inputInfo}
          />
        </div>
      </div>
      {edit && (
        <div className={classes.listButton}>
          <CheckboxSmallIcon className={classes.btn} />
          <CloseSmallIcon
            className={classes.btn}
            onClick={() => setEdit(false)}
          />
        </div>
      )}
    </div>
  );
};

export default CardContentItemInput;
