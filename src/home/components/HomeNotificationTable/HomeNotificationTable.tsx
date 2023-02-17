import { Card, TableBody, TableCell, Typography } from "@material-ui/core";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import RequirePermissions from "@saleor/components/RequirePermissions";
import ResponsiveTable from "@saleor/components/ResponsiveTable";
import Skeleton from "@saleor/components/Skeleton";
import TableRowLink from "@saleor/components/TableRowLink";
import { makeStyles } from "@saleor/macaw-ui";
import React from "react";
import { useIntl } from "react-intl";

import { homeNotificationTableMessages as messages } from "./messages";

const useStyles = makeStyles(
  () => ({
    arrowIcon: {
      textAlign: "right",
      width: 100,
    },
    tableCard: {
      overflow: "hidden",
    },
    tableRow: {
      cursor: "pointer",
    },
  }),
  { name: "HomeNotificationTable" },
);

interface HomeNotificationTableProps {
  tasksToCapture: number;
  tasksToFulfill: number;
  tasksOutOfStock: number;
  createNewChannelHref: string;
  tasksToFulfillHref: string;
  tasksToCaptureHref: string;
  tasksOutOfStockHref: string;
  noChannel: boolean;
}

const HomeNotificationTable: React.FC<HomeNotificationTableProps> = props => {
  const {
    createNewChannelHref,
    tasksToFulfillHref,
    tasksToCaptureHref,
    tasksOutOfStockHref,
    tasksToCapture,
    tasksToFulfill,
    tasksOutOfStock,
    noChannel,
  } = props;

  const classes = useStyles(props);

  const intl = useIntl();

  return (
    <Card className={classes.tableCard}>
      <ResponsiveTable>
        <TableBody className={classes.tableRow}>
          {noChannel && (
            <RequirePermissions requiredPermissions={["MANAGE_CHANNELS"]}>
              <TableRowLink hover={true} href={createNewChannelHref}>
                <TableCell>
                  <Typography>
                    {intl.formatMessage(messages.createNewChannel)}
                  </Typography>
                </TableCell>
                <TableCell className={classes.arrowIcon}>
                  <KeyboardArrowRight />
                </TableCell>
              </TableRowLink>
            </RequirePermissions>
          )}
          <RequirePermissions requiredPermissions={["MANAGE_TASKS"]}>
            <TableRowLink hover={true} href={tasksToFulfillHref}>
              <TableCell data-test-id="tasks-to-fulfill">
                {tasksToFulfill === undefined ? (
                  <Skeleton />
                ) : tasksToFulfill === 0 ? (
                  <Typography>
                    {intl.formatMessage(messages.myTasks)}
                  </Typography>
                ) : (
                  <Typography>
                    {intl.formatMessage(messages.pendingTasks, {
                      amount: <strong>{tasksToFulfill}</strong>,
                    })}
                  </Typography>
                )}
              </TableCell>
              <TableCell className={classes.arrowIcon}>
                <KeyboardArrowRight />
              </TableCell>
            </TableRowLink>
            <TableRowLink hover={true} href={tasksToCaptureHref}>
              <TableCell data-test-id="tasks-to-capture">
                {tasksToCapture === undefined ? (
                  <Skeleton />
                ) : tasksToCapture === 0 ? (
                  <Typography>
                    {intl.formatMessage(messages.workFromHome)}
                  </Typography>
                ) : (
                  <Typography>
                    {intl.formatMessage(messages.doneTasks, {
                      amount: <strong>{tasksToCapture}</strong>,
                    })}
                  </Typography>
                )}
              </TableCell>
              <TableCell className={classes.arrowIcon}>
                <KeyboardArrowRight />
              </TableCell>
            </TableRowLink>
          </RequirePermissions>
          <RequirePermissions requiredPermissions={["MANAGE_PRODUCTS"]}>
            <TableRowLink hover={true} href={tasksOutOfStockHref}>
              <TableCell data-test-id="tasks-out-of-stock">
                {tasksOutOfStock === undefined ? (
                  <Skeleton />
                ) : tasksOutOfStock === 0 ? (
                  <Typography>
                    {intl.formatMessage(messages.changeOffice)}
                  </Typography>
                ) : (
                  <Typography>
                    {intl.formatMessage(messages.TasksOut, {
                      amount: <strong>{tasksOutOfStock}</strong>,
                    })}
                  </Typography>
                )}
              </TableCell>
              <TableCell className={classes.arrowIcon}>
                <KeyboardArrowRight />
              </TableCell>
            </TableRowLink>
          </RequirePermissions>
        </TableBody>
      </ResponsiveTable>
    </Card>
  );
};
HomeNotificationTable.displayName = "HomeNotificationTable";
export default HomeNotificationTable;
