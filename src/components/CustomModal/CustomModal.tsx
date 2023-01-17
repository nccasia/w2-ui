import { makeStyles, Modal } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(
  () => ({
    profileUser: {
      display: "flex",
      alignItems: "center",
      padding: "8px 12px",
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
      className={classes.profileUser}
      open={openModal}
      onClose={() => {
        setOpenModal(false);
      }}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
