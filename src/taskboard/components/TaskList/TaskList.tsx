import {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
// import { CSSProperties } from "@material-ui/styles";
import Container from "@saleor/components/Container";
import ResponsiveTable from "@saleor/components/ResponsiveTable";
import TableCellHeader from "@saleor/components/TableCellHeader";
import { TablePaginationWithContext } from "@saleor/components/TablePagination";
import TableRowLink from "@saleor/components/TableRowLink";
import { makeStyles, Pill } from "@saleor/macaw-ui";
import { maybe, renderCollection } from "@saleor/misc";
import { Task } from "@saleor/taskboard/model/Task";
import { taskUrl } from "@saleor/taskboard/urls";
import React from "react";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles(
  () => ({
    colUser: {
      width: "20%",
    },
    colTask: {
      width: 230,
    },
    colTitle: {
      width: "40%",
    },
    colID: {
      width: 120,
    },
    colStatus: {
      width: "20%",
    },
    colType: {},
    colDate: {},
    colPriority: {
      width: "20%",
    },
    colState: {},
    colRow: {
      cursor: "pointer",
    },
    pill: {
      maxWidth: "100%",
    },
    priority: {
      display: "flex",
      padding: "0 !important",
      alignItems: "center",
    },
    link: {
      cursor: "pointer",
    },
  }),
  { name: "TaskList" },
);

interface TaskListProps {
  tasks: Task[] | [];
}

const numberOfColumns = 8;

export const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const classes = useStyles();

  const onUpdateListSettings = (_key: any, _value: any) => null;

  return (
    <ResponsiveTable>
      <TableHead>
        <TableRowLink>
          <TableCellHeader className={classes.colTitle}>
            <FormattedMessage id="9a9+ww" defaultMessage="Title" />
          </TableCellHeader>
          <TableCellHeader className={classes.colUser}>
            <FormattedMessage id="EwRIOm" defaultMessage="User" />
          </TableCellHeader>
          <TableCellHeader className={classes.colStatus}>
            <FormattedMessage id="tzMNF3" defaultMessage="Status" />
          </TableCellHeader>
          <TableCellHeader className={classes.colPriority}>
            <FormattedMessage id="8lCjAM" defaultMessage="Priority" />
          </TableCellHeader>
        </TableRowLink>
      </TableHead>
      <TableFooter>
        <TableRowLink>
          <TablePaginationWithContext
            colSpan={numberOfColumns}
            settings={{ rowNumber: 10 }}
            disabled={false}
            onUpdateListSettings={onUpdateListSettings}
          />
        </TableRowLink>
      </TableFooter>
      <TableBody>
        {renderCollection(
          tasks,
          task => (
            <TableRowLink
              hover={!!task}
              href={task && taskUrl(`${task.id}`)}
              className={classes.colRow}
            >
              <TableCell className={classes.colTitle}>
                {maybe(() => task.title) ? task.title : <Skeleton />}
              </TableCell>
              <TableCell className={classes.colUser}>
                {maybe(() => task.User.email) ? task.User.email : <Skeleton />}
              </TableCell>
              <TableCell className={classes.colStatus}>
                {maybe(() => task.status) ? (
                  <Pill label={task.status} color="success" />
                ) : (
                  <Skeleton />
                )}
              </TableCell>
              <TableCell className={classes.colPriority}>
                {maybe(() => task.priority) ? (
                  <Container className={classes.priority}>
                    <Pill label={task.priority} color="error" />
                  </Container>
                ) : (
                  <Skeleton />
                )}
              </TableCell>
            </TableRowLink>
          ),
          () => (
            <TableRowLink>
              <TableCell colSpan={numberOfColumns}>
                <FormattedMessage id="qMYISc" defaultMessage="No tasks found" />
              </TableCell>
            </TableRowLink>
          ),
        )}
      </TableBody>
    </ResponsiveTable>
  );
};

export default TaskList;
