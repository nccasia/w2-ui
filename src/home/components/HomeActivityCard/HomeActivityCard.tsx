import {
  Avatar,
  Card,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import CardTitle from "@saleor/components/CardTitle";
import { DateTime } from "@saleor/components/Date";
import { makeStyles } from "@saleor/macaw-ui";
import { IActivityAction } from "@saleor/type/Task";
import React from "react";
import { useIntl } from "react-intl";
const useStyles = makeStyles(
  {
    loadingProducts: {
      paddingBottom: "10px",
      paddingTop: "10px",
    },
    noProducts: {
      paddingBottom: "16px",
      paddingTop: "16px",
    },
    listItemText: {
      marginLeft: "10px",
    },
  },
  { name: "HomeActivityCard" },
);

interface HomeActivityCardProps {
  activities: IActivityAction[];
}

const HomeActivityCard: React.FC<HomeActivityCardProps> = props => {
  const { activities } = props;
  const classes = useStyles(props);

  const intl = useIntl();

  return (
    <Card>
      <CardTitle
        title={intl.formatMessage({
          id: "BXkF8Z",
          defaultMessage: "Activity",
          description: "header",
        })}
      />
      <List dense={true}>
        {activities &&
          activities?.map(activity => (
            <ListItem key={activity.id}>
              <Avatar src={activity.user.avatar} />
              <ListItemText
                className={classes.listItemText}
                primary={
                  <Typography>
                    <Link href="#" color="inherit">
                      {activity.typeAction} Action
                    </Link>
                  </Typography>
                }
                secondary={<DateTime date={activity.date} />}
              />
            </ListItem>
          ))}
      </List>
    </Card>
  );
};
HomeActivityCard.displayName = "HomeActivityCard";
export default HomeActivityCard;
