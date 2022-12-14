import { Typography } from "@material-ui/core";
import CardSpacer from "@saleor/components/CardSpacer";
import Container from "@saleor/components/Container";
import Grid from "@saleor/components/Grid";
import RequirePermissions from "@saleor/components/RequirePermissions";
import Tasks from "@saleor/icons/Tasks";
import { makeStyles } from "@saleor/macaw-ui";
import { IEventLog, IQuantityTasks } from "@saleor/type/Task";
import React from "react";

import Sales from "../../../icons/Sales";
import HomeActivityCard from "../HomeActivityCard";
import HomeAnalyticsCard from "../HomeAnalyticsCard";
import HomeHeader from "../HomeHeader";
import HomeNotificationTable from "../HomeNotificationTable/HomeNotificationTable";
import HomeProductListCard from "../HomeProductListCard";

const useStyles = makeStyles(
  theme => ({
    cardContainer: {
      display: "grid",
      gridColumnGap: theme.spacing(3),
      gridTemplateColumns: "1fr 1fr",
      [theme.breakpoints.down("sm")]: {
        gridColumnGap: theme.spacing(1),
      },
      [theme.breakpoints.down("xs")]: {
        gridTemplateColumns: "1fr",
      },
    },
    icon: {
      "& path": {
        fill: theme.palette.primary.main,
      },
    },
  }),
  { name: "HomePage" },
);

export interface HomePageProps {
  eventLog?: {
    EventLog: IEventLog[];
  };
  quantityTasks: IQuantityTasks;
  tasksToCapture: number | null;
  tasksToFulfill: number | null;
  tasksOutOfStock: number;
  sales: any;
  topTasks: any;
  userName: string;
  createNewChannelHref?: string;
  tasksToFulfillHref?: string;
  tasksToCaptureHref?: string;
  tasksOutOfStockHref?: string;
  noChannel: boolean;
}

const HomePage: React.FC<HomePageProps> = props => {
  const {
    userName,
    topTasks,
    eventLog,
    quantityTasks,
    createNewChannelHref,
    tasksToFulfillHref,
    tasksToCaptureHref,
    tasksOutOfStockHref,
    tasksToCapture = 0,
    tasksToFulfill = 0,
    tasksOutOfStock = 0,
    noChannel,
  } = props;
  const classes = useStyles(props);

  return (
    <Container>
      <HomeHeader userName={userName} />
      <CardSpacer />
      <Grid>
        <div>
          <RequirePermissions requiredPermissions={["MANAGE_TASKS"]}>
            <div className={classes.cardContainer}>
              <HomeAnalyticsCard
                title={"Pending Tasks"}
                testId="sales-analytics"
                icon={
                  <Sales
                    fontSize="inherit"
                    className={classes.icon}
                    viewBox="0 0 64 64"
                  />
                }
              >
                <Typography>{quantityTasks.pending}</Typography>
              </HomeAnalyticsCard>
              <HomeAnalyticsCard
                title={"Done Tasks"}
                testId="tasks-analytics"
                icon={
                  <Tasks
                    fontSize="inherit"
                    className={classes.icon}
                    viewBox="0 0 64 64"
                  />
                }
              >
                <Typography>{quantityTasks.done}</Typography>
              </HomeAnalyticsCard>
            </div>
          </RequirePermissions>
          <HomeNotificationTable
            createNewChannelHref={createNewChannelHref}
            tasksToFulfillHref={tasksToFulfillHref}
            tasksToCaptureHref={tasksToCaptureHref}
            tasksOutOfStockHref={tasksOutOfStockHref}
            tasksToCapture={tasksToCapture}
            tasksToFulfill={tasksToFulfill}
            tasksOutOfStock={tasksOutOfStock}
            noChannel={noChannel}
          />
          <CardSpacer />
          {topTasks && (
            <RequirePermissions requiredPermissions={["MANAGE_TASKS"]}>
              <HomeProductListCard
                testId="top-products"
                topProducts={topTasks}
              />
              <CardSpacer />
            </RequirePermissions>
          )}
        </div>
        {eventLog && (
          <div>
            <RequirePermissions requiredPermissions={["MANAGE_TASKS"]}>
              <HomeActivityCard eventLog={eventLog} />
            </RequirePermissions>
          </div>
        )}
      </Grid>
    </Container>
  );
};
HomePage.displayName = "HomePage";
export default HomePage;
