import { Typography } from "@material-ui/core";
import CardSpacer from "@saleor/components/CardSpacer";
import Container from "@saleor/components/Container";
import Grid from "@saleor/components/Grid";
import RequirePermissions from "@saleor/components/RequirePermissions";
import { makeStyles } from "@saleor/macaw-ui";
import { IActivityAction, IQuantityTasks } from "@saleor/type/Task";
import React from "react";

import Orders from "../../../icons/Orders";
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
  activities: IActivityAction[];
  quantityTasks: IQuantityTasks;
  ordersToCapture: number | null;
  ordersToFulfill: number | null;
  productsOutOfStock: number;
  sales: any;
  topProducts: any;
  userName: string;
  createNewChannelHref?: string;
  ordersToFulfillHref?: string;
  ordersToCaptureHref?: string;
  productsOutOfStockHref?: string;
  noChannel: boolean;
}

const HomePage: React.FC<HomePageProps> = props => {
  const {
    userName,
    topProducts,
    activities,
    quantityTasks,
    createNewChannelHref,
    ordersToFulfillHref,
    ordersToCaptureHref,
    productsOutOfStockHref,
    ordersToCapture = 0,
    ordersToFulfill = 0,
    productsOutOfStock = 0,
    noChannel,
  } = props;

  const classes = useStyles(props);

  return (
    <Container>
      <HomeHeader userName={userName} />
      <CardSpacer />
      <Grid>
        <div>
          <RequirePermissions
            requiredPermissions={['MANAGE_ORDERS']}
          >
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
                testId="orders-analytics"
                icon={
                  <Orders
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
            ordersToFulfillHref={ordersToFulfillHref}
            ordersToCaptureHref={ordersToCaptureHref}
            productsOutOfStockHref={productsOutOfStockHref}
            ordersToCapture={ordersToCapture}
            ordersToFulfill={ordersToFulfill}
            productsOutOfStock={productsOutOfStock}
            noChannel={noChannel}
          />
          <CardSpacer />
          {topProducts && (
            <RequirePermissions
              requiredPermissions={[
              ]}
            >
              <HomeProductListCard
                testId="top-products"
                topProducts={topProducts}
              />
              <CardSpacer />
            </RequirePermissions>
          )}
        </div>
        {activities && (
          <div>
            <RequirePermissions
              requiredPermissions={['MANAGE_ORDERS']}
            >
              <HomeActivityCard activities={activities} />
            </RequirePermissions>
          </div>
        )}
      </Grid>
    </Container>
  );
};
HomePage.displayName = "HomePage";
export default HomePage;
