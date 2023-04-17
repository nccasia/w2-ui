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
    subTaskContainer: {
      border: "1px solid rgba(37, 41, 41, 0.1)",
      borderRadius: 6,
      marginBottom: 10,
      "& :hover": {
        cursor: "pointer",
        "& .MuiListItem-root": {
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        },
      },
    },
    subTask: {
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
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
        marginTop: "8px",
        padding: "0 10px 0 0",
        borderRadius: "4px",
        border: "1px solid rgba(37, 41, 41, 0.1)",
      },
      "& .MuiFormControl-root>.MuiFormGroup-root": {
        justifyContent: "space-around !important",
        flexDirection: "initial !important",
      },
    },
    profileUser: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "8px 12px",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #888",
      borderRadius: "7px",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: 1000,
      maxHeight: "700px",
    },
    subtask: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
    subTaskTitle: {
      margin: 0,
      paddingBottom: "2.4rem",
    },
    subTaskList: {
      marginTop: "30px",
      padding: "2.4rem 3.2rem",
      backgroundColor: theme.palette.background.paper,
      borderRadius: "7px",
    },
    subtaskAutoAssignee: {
      display: "flex",
      width: "100%",
      "& .form_approve": {
        width: "70%",
        borderRight: "1px solid rgba(37, 41, 41, 0.2)",
        [theme.breakpoints.down(630)]: {
          borderRight: "none",
          width: "100%",
          borderBottom: "1px solid rgba(37, 41, 41, 0.2)",
        },
      },

      "& .single_choice-assignee": {
        width: "30%",
        margin: "40px 16px 0 30px",
        [theme.breakpoints.down(630)]: {
          margin: "20px 16px 0 30px",
          minWidth: "90%",
        },
      },

      [theme.breakpoints.down(630)]: {
        display: "block",
      },
    },
  }),
  {
    name: "TaskDetailPage",
  },
);
