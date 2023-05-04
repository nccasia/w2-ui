import CardSpacer from "@saleor/components/CardSpacer";
import Container from "@saleor/components/Container";
import Tasks from "@saleor/icons/Tasks";
import { makeStyles } from "@saleor/macaw-ui";
import { IEventLog } from "@saleor/type/Task";
import React from "react";

import Sales from "../../../icons/Sales";
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
        gridTemplateColumns: "1fr",
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
  myCreatedtaskCount: number | null;
  myParticipatedTaskCount: number | null;
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
    myParticipatedTaskCount,
    myCreatedtaskCount,
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
      <div className={classes.cardContainer}>
        <HomeAnalyticsCard
          title={"My Requests"}
          testId="sales-analytics"
          icon={
            <Sales
              fontSize="inherit"
              className={classes.icon}
              viewBox="0 0 64 64"
            />
          }
        >
          <h1>{myCreatedtaskCount}</h1>
        </HomeAnalyticsCard>
        <HomeAnalyticsCard
          title={"My Participations"}
          testId="tasks-analytics"
          icon={
            <Tasks
              fontSize="inherit"
              className={classes.icon}
              viewBox="0 0 64 64"
            />
          }
        >
          <h1>{myParticipatedTaskCount}</h1>
        </HomeAnalyticsCard>
      </div>
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
      {topTasks && topTasks.length > 0 && (
        <>
          <HomeProductListCard testId="top-products" topProducts={topTasks} />
        </>
      )}
      <CardSpacer />
    </Container>
  );
};
HomePage.displayName = "HomePage";
export default HomePage;
