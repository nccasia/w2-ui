import { makeStyles } from "@saleor/macaw-ui";

export const useStyles = makeStyles(
  () => ({
    root: {
      "& .MuiAutocomplete-endAdornment": {
        display: "inline-flex",
        alignItems: "center",
        columnGap: "6px",
        paddingTop: "3px",
        paddingRight: "4px",
      },
      "& .MuiInputBase-inputAdornedEnd": {
        marginTop: "8px",
        marginLeft: "-3px",
      },
    },
  }),
  { name: "AutoComplete" },
);
