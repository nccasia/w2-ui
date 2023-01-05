import { MenuItem } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles, MultipleValueAutocomplete } from "@saleor/macaw-ui";
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
      "C:Workspacew2-uisrc\taskscomponentsTaskDetailSidebarcomponentsCardContentItemMultipleChoiceCardContentItemMultipleChoice",
  },
);

interface CardContentItemMultipleChoiceProps {
  results: any;
  search: any;
  title: string | null;
}

const CardContentItemMultipleChoice: React.FC<CardContentItemMultipleChoiceProps> = ({
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
        <MultipleValueAutocomplete
          fullWidth
          choices={results}
          label={title}
          onInputChange={search}
          initialValue={[results[1]]}
          onChange={() => true}
        >
          {({ choices, getItemProps }) =>
            choices.map((choice, choiceIndex) => (
              <MenuItem
                key={choiceIndex}
                {...getItemProps({ item: choice, index: choiceIndex })}
              >
                {choice.label}
              </MenuItem>
            ))
          }
        </MultipleValueAutocomplete>
      </div>
    </div>
  );
};

export default CardContentItemMultipleChoice;
