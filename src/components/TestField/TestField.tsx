import { MenuItem } from "@material-ui/core";
import { useMockAutocomplete } from "@saleor/hooks/useMockAutocomplete";
import { MultipleValueAutocomplete } from "@saleor/macaw-ui";
import React from "react";

import { choices } from "./fixtures";

const TestField: React.FC = () => {
  const { results, search } = useMockAutocomplete(choices);
  return (
    <>
      <MultipleValueAutocomplete
        fullWidth
        choices={results}
        label="Test"
        // eslint-disable-next-line no-console
        onChange={console.log}
        onInputChange={search}
      >
        {({ choices, getItemProps }) =>
          choices.map((choice, choiceIndex) => (
            <MenuItem {...getItemProps({ item: choice, index: choiceIndex })}>
              {choice.label}
            </MenuItem>
          ))
        }
      </MultipleValueAutocomplete>
    </>
  );
};

export default TestField;
