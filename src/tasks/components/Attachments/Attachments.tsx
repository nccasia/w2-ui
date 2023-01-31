import { Typography } from "@material-ui/core";
import { useStyles } from "@saleor/apps/styles";
import Attachment from "@saleor/components/Attachment";
import React from "react";

const Attachments = (): JSX.Element => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="subtitle1" className={classes.attachTitle}>
        Attachments (4)
      </Typography>
      <div className={classes.attachments}>
        {[23423, 4, 324, 32, 2, 43, 24, 32, 4, 4, 324, 32].map(
          (_item, index) => (
            <Attachment
              click={() => true}
              key={index}
              nameFile={"IMAGE"}
              timeFile={String(new Date().toLocaleString())}
              image={
                "https://c.wallhere.com/images/fd/4f/a4f4e213733ee862dddde0e304ae-1567069.jpg!d"
              }
            />
          ),
        )}
      </div>
    </>
  );
};

export default Attachments;
