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
    activities: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(2),
    },
    activitiesTitle: {
      fontWeight: 500,
    },
    attach: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
    attachTitle: {
      fontWeight: "bold",
    },
    attachments: {
      marginBottom: "30px",
      display: "flex",
      overflowX: "scroll",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      gap: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      "&::-webkit-scrollbar": {
        height: "8px",
        borderRadius: "5px",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#8c8c8c",
        borderRadius: "5px",
      },
    },
    modalContent: {
      position: "relative",
      height: "100vh",
      overflowY: "scroll",
    },
    btnClose: {
      position: "absolute",
      top: theme.spacing(2),
      right: theme.spacing(2),
      zIndex: 4444,
      backgroundColor: "#000000",
      color: "#FFFFFF",
      fontSize: 30,
      borderRadius: "50%",
      cursor: "pointer",
    },
    subTaskItem: {
      "& form": {
        padding: 20,
      },
      "& form>.MuiButtonBase-root": {
        display: "none",
      },
      "& form>.MuiFormControl-root": {
        maxWidth: "100% !important",
      },
      "& .MuiFormGroup-root label": {
        padding: "0 10px 0 0",
        borderRadius: "4px",
        boxShadow: "0 0 2px 1px #999",
      },
      "& .MuiFormControl-root>.MuiFormGroup-root": {
        justifyContent: "space-around !important",
        flexDirection: "initial !important",
      },
      marginBottom: 10,
      "& .MuiAvatar-root": {
        "& :hover": {
          cursor: "pointer",
          opacity: 0.8,
        },
      },
    },
    subtask: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
  }),
  {
    name: "TaskDetailPage",
  },
);
