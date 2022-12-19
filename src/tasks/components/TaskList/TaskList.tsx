import { TableBody, TableCell, TableHead } from "@material-ui/core";
import { CSSProperties } from "@material-ui/styles";
import { DateTime } from "@saleor/components/Date";
import ResponsiveTable from "@saleor/components/ResponsiveTable";
import TableCellHeader from "@saleor/components/TableCellHeader";
import TableRowLink from "@saleor/components/TableRowLink";
import { makeStyles } from "@saleor/macaw-ui";
import React from "react";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles(
  theme => {
    const overflowing: CSSProperties = {
      overflow: "hidden",
      textOverflow: "ellipsis",
    };

    return {
      [theme.breakpoints.up("lg")]: {
        colUser: {
          width: 220,
        },
        colTask: {
          width: 230,
        },
        colID: {
          width: 120,
        },
        colStatus: {
          width: 220,
        },
        colType: {},
        colDate: {},
      },
      pill: {
        maxWidth: "100%",
        ...overflowing,
      },
      colUser: overflowing,
      colType: {},
      colID: {},
      colStatus: {},
      colDate: {
        textAlign: "right",
      },
      link: {
        cursor: "pointer",
      },
    };
  },
  { name: "OrderList" },
);

export const TaskList: React.FC = () => {
  const classes = useStyles();
  return (
    <ResponsiveTable>
      <TableHead>
        <TableRowLink>
          <TableCellHeader className={classes.colID}>
            <FormattedMessage id="qlcuNQ" defaultMessage="ID" />
          </TableCellHeader>
          <TableCellHeader className={classes.colTask}>
            <FormattedMessage id="0wJ7N+" defaultMessage="Task" />
          </TableCellHeader>
          <TableCellHeader className={classes.colUser}>
            <FormattedMessage id="EwRIOm" defaultMessage="User" />
          </TableCellHeader>
          <TableCellHeader className={classes.colType}>
            <FormattedMessage id="+U6ozc" defaultMessage="Type" />
          </TableCellHeader>
          <TableCellHeader className={classes.colStatus}>
            <FormattedMessage id="tzMNF3" defaultMessage="Status" />
          </TableCellHeader>
          <TableCellHeader textAlign="right" className={classes.colDate}>
            <FormattedMessage id="tLfo5O" defaultMessage="Created date" />
          </TableCellHeader>
        </TableRowLink>
      </TableHead>
      <TableBody>
        <TableRowLink>
          <TableCell className={classes.colID}>1123</TableCell>
          <TableCell className={classes.colTask}>Fix bug aaa</TableCell>
          <TableCell className={classes.colUser}>Son</TableCell>
          <TableCell className={classes.colType}>Request Device</TableCell>
          <TableCell className={classes.colStatus}>PENDING</TableCell>
          <TableCell className={classes.colDate}>
            <DateTime date={"2022-12-15T11:07:55.916944+00:00"} />
          </TableCell>
        </TableRowLink>
      </TableBody>
      {/* <TableFooter>
        <TableRowLink>
          <TablePaginationWithContext
            colSpan={numberOfColumns}
            settings={{rowNumber: 6}}
            disabled={false}
            onUpdateListSettings={onUpdateListSettings}
          />
        </TableRowLink>
      </TableFooter> */}
    </ResponsiveTable>
  );
};

export default TaskList;
