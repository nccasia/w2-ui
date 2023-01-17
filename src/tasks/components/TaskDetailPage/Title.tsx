import { Pill } from "@saleor/macaw-ui";
import React from "react";

import { useStyles } from "./style";

interface TitleProps {
  props: {
    title?: string;
    status?: string;
  };
}
const Title = ({ props }: TitleProps) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {props.title}
      <div>
        <Pill label={props.status} color={"success"} />
      </div>
    </div>
  );
};

export default Title;
