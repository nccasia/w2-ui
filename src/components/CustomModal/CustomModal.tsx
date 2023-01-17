import { makeStyles, Modal, Theme } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(
  (theme: Theme) => ({
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
      maxHeight: "700px",
    },
  }),
  { name: "FormCreatedTaskDetail" },
);
interface CustomModalType {
  children: JSX.Element;
  openModal?: boolean;
  setOpenModal: (value: boolean) => void;
}
const CustomModal = ({
  children,
  openModal,
  setOpenModal,
}: CustomModalType): JSX.Element => {
  const classes = useStyles();
  return (
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      className={classes.profileUser}
      open={openModal}
      onClose={() => {
        setOpenModal(false);
      }}
    >
      <div className={classes.paper}>{children}</div>
    </Modal>
  );
};

export default CustomModal;
