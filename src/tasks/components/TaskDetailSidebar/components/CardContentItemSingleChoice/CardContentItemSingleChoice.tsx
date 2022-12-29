import { MenuItem, Typography } from "@material-ui/core";
import { Autocomplete, makeStyles } from "@saleor/macaw-ui";
import React from "react";

const useStyles = makeStyles(
  theme => ({
    container: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      marginTop: theme.spacing(5),
    },
    containerTitle: {
      width: "30%",
      color: "#969696",
    },
    title: {
      fontWeight: "bold",
    },
    containerInfo: {
      width: "70%",
    },
  }),
  {
    name:
      "C:Workspacew2-uisrc\taskscomponentsTaskDetailSidebarcomponentsCardContentItemSingleChoiceCardContentItemSingleChoice",
  },
);

interface CardContentItemSingleChoiceProps {
  results: any;
  search: any;
  title: string | null;
}

const CardContentItemSingleChoice: React.FC<CardContentItemSingleChoiceProps> = ({
  results,
  search,
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
        <Autocomplete
          choices={results}
          fullWidth
          label={title}
          onInputChange={search}
          defaultValue={results[1].value}
        >
          {({ highlightedIndex, getItemProps }) =>
            results.map((choice, choiceIndex) => (
              <MenuItem
                key={choiceIndex}
                selected={highlightedIndex === choiceIndex}
                {...getItemProps({ item: choice, index: choiceIndex })}
              >
                {choice.label}
              </MenuItem>
            ))
          }
        </Autocomplete>
      </div>
    </div>
  );
};

export default CardContentItemSingleChoice;
