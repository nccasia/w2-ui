import { Typography } from "@material-ui/core";
import { DownloadIcon, makeStyles } from "@saleor/macaw-ui";
import React from "react";

const useStyles = makeStyles(
  theme => ({
    root: {
      border: "1px solid #9b9b9b",
      borderRadius: "5px",
      paddingBottom: theme.spacing(2),
      cursor: "pointer",
      "&:hover .preview": {
        display: "block",
      },
    },
    file: {
      height: "70%",
      position: "relative",
    },
    preview: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      transitionDuration: "0.3s",
      display: "none",
    },
    filePreview: {
      width: "170px",
      height: "100%",
      objectFit: "cover",
    },
    fileInfo: {
      height: "30%",
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    name: {
      fontSize: 14,
      fontWeight: "bold",
    },
    date: {
      fontSize: 11,
    },
    download: {
      position: "absolute",
      top: theme.spacing(2),
      right: theme.spacing(2),
      color: "#FFFFFF",
      border: "1px solid #FFFFFF",
      zIndex: 999999,
    },
  }),
  { name: "Attachment" },
);

interface AttachmentProps {
  click: () => void;
  nameFile: string;
  timeFile: string;
  image: string;
}

const Attachment: React.FC<AttachmentProps> = ({
  nameFile,
  timeFile,
  image,
  click,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.file}>
        <img className={classes.filePreview} src={image} alt="Attachment" />
        <div className={`preview ${classes.preview}`}>
          <a
            style={{
              display: "block",
              width: "100%",
              height: "95%",
              zIndex: 9999,
              backgroundColor: "rgba(72 122 180 / .7)",
              overflow: "hidden",
            }}
            onClick={click}
          ></a>
          <DownloadIcon color="error" className={classes.download} />
        </div>
      </div>
      <div className={classes.fileInfo}>
        <Typography className={classes.name} variant={"subtitle2"}>
          {nameFile}
        </Typography>
        <Typography className={classes.date} variant={"subtitle2"}>
          {timeFile}
        </Typography>
      </div>
    </div>
  );
};

export default Attachment;
