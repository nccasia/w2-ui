import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React from "react";

import { useStyles } from "./styles";

interface Props {
  onChangeSingleChoice: (_e: any, data: any, subTaskId: string) => void;
  subTaskId: string;
  choiceType: any;
  userSingleChoice: any;
}

const AutoCompleteUser: React.FC<Props> = ({
  subTaskId,
  onChangeSingleChoice,
  choiceType,
  userSingleChoice,
}) => {
  const classes = useStyles();

  return (
    <>
      <Autocomplete
        className={classes.root}
        options={choiceType}
        getOptionLabel={option => option.email}
        fullWidth
        onChange={(e, value) =>
          onChangeSingleChoice(e.defaultPrevented, value, subTaskId)
        }
        defaultValue={userSingleChoice}
        renderInput={params => (
          <TextField {...params} label="Assignee" variant="outlined" />
        )}
      />
    </>
  );
};

export default AutoCompleteUser;
