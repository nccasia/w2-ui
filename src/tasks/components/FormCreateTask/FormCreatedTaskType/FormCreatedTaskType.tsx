import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { radioType } from "@saleor/styles/modal";
import React, { useState } from "react";

interface Props {
  typeList: any;
  onSetType: React.Dispatch<React.SetStateAction<string>>;
}

const FormCreatedTaskType: React.FC<Props> = ({ typeList, onSetType }) => {
  const [typeSelect, SetTypeSelect] = useState<string>("");
  return (
    <>
      <Box>
        <FormControl style={{ width: "100%" }}>
          <FormLabel style={{ fontWeight: 600 }}>Select a Type</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={typeSelect}
            onChange={e => SetTypeSelect(e.target.value)}
          >
            {typeList.map(item => (
              <FormControlLabel
                key={item.value}
                control={<Radio />}
                value={item.value}
                label={item.label}
                style={radioType}
                labelPlacement="start"
              />
            ))}
          </RadioGroup>
        </FormControl>
        <Button
          style={{ float: "right", margin: "10px 10px 0 0" }}
          variant="outlined"
          onClick={() => onSetType(typeSelect)}
        >
          NEXT
        </Button>
      </Box>
    </>
  );
};

export default FormCreatedTaskType;
