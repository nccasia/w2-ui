import { makeStyles } from "@saleor/macaw-ui";

export const useStyles = makeStyles(
  theme => ({
    container: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: "10px",
    },
    date: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(3),
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 0,
    },
  }),
  {
    name: "TaskDetailPage",
  },
);
