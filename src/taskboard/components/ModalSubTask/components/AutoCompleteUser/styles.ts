import { makeStyles } from "@saleor/macaw-ui";

export const useStyles = makeStyles(
  () => ({
    root: {
      "& .MuiAutocomplete-endAdornment": {
        display: "inline-flex",
        alignItems: "center",
        columnGap: "6px",
      },
    },
  }),
  { name: "AutoComplete" },
);
