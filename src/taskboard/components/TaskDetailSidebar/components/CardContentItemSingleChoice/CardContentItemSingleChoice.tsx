import { Typography } from "@material-ui/core";
import UserChip from "@saleor/components/UserChip";
import { makeStyles } from "@saleor/macaw-ui";
import React from "react";

const useStyles = makeStyles(
  theme => ({
    container: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      marginTop: theme.spacing(1),
      overflow: "hidden",
    },
    containerTitle: {
      width: "30%",
      color: "#969696",
    },
    title: {
      fontWeight: "bold",
    },
    containerInfo: {
      display: "flex",
      width: "70%",
    },
    containerInfoName: {
      lineHeight: "40px",
    },
  }),
  {
    name: "CardContentItemSingleChoice",
  },
);

interface CardContentItemSingleChoiceProps {
  results: any;
  title: string | null;
}

const CardContentItemSingleChoice: React.FC<CardContentItemSingleChoiceProps> = ({
  results,
  title,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.containerTitle}>
        <Typography className={classes.title} variant="subtitle2">
          {title}
        </Typography>
      </div>
      <div className={classes.containerInfo}>
        <UserChip user={results} />
      </div>
    </div>
  );
};

export default CardContentItemSingleChoice;
