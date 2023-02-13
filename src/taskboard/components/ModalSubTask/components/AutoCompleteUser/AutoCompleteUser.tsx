import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React from "react";

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
  return (
    <>
      <Autocomplete
        options={choiceType}
        getOptionLabel={option => option.label}
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
