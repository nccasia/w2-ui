import { FilterErrorMessages, IFilter } from "@saleor/components/Filter";
import Filter from "@saleor/components/Filter/Filter";
import { makeStyles } from "@saleor/macaw-ui";
import React from "react";

import { FilterProps } from "../../../../../types";

export interface FilterBarProps<TKeys extends string = string>
  extends FilterProps<TKeys> {
  errorMessages?: FilterErrorMessages<TKeys>;
  filterStructure: IFilter<TKeys>;
}

const useStyles = makeStyles(
  theme => ({
    root: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      display: "flex",
      flexWrap: "wrap",
      padding: theme.spacing(1, 4),
    },
    tabActionButton: {
      marginLeft: theme.spacing(2),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
  }),
  {
    name: "FilterBar",
  },
);

const FilterBar: React.FC<FilterBarProps> = props => {
  const {
    currencySymbol,
    filterStructure,
    onFilterChange,
    onFilterAttributeFocus,
    errorMessages,
  } = props;

  const classes = useStyles(props);
  return (
    <>
      <div className={classes.root}>
        <Filter
          errorMessages={errorMessages}
          menu={filterStructure}
          currencySymbol={currencySymbol}
          onFilterAdd={onFilterChange}
          onFilterAttributeFocus={onFilterAttributeFocus}
        />
      </div>
    </>
  );
};
FilterBar.displayName = "FilterBar";
export default FilterBar;
