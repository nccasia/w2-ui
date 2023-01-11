import {
  Avatar,
  Card,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import CardTitle from "@saleor/components/CardTitle";
import { DateTime } from "@saleor/components/Date";
import { makeStyles } from "@saleor/macaw-ui";
import { IEventLog } from "@saleor/type/Task";
import React from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
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
    linkContentColor: {
      color: "blue",
      "&:hover": {
        color: "red",
      },
    },
  },
  { name: "HomeActivityCard" },
);

interface HomeActivityCardProps {
  eventLog: {
    EventLog: IEventLog[];
  };
}

const HomeActivityCard: React.FC<HomeActivityCardProps> = props => {
  const { eventLog } = props;
  const classes = useStyles(props);

  const intl = useIntl();
  // eslint-disable-next-line no-console
  console.log("1111", eventLog.EventLog[0]);
  return (
    <Card>
      <CardTitle
        title={intl.formatMessage({
          id: "nCsCh6",
          defaultMessage: "Event Log",
          description: "header",
        })}
      />
      <List dense={true}>
        {eventLog.EventLog?.map(event => (
          <ListItem key={event.id}>
            <Avatar
              src={
                event.User.avatar
                  ? event.User.avatar
                  : "https://symbols.vn/wp-content/uploads/2022/02/Hinh-Nen-Lisa-xinh-xan.jpg"
              }
            />
            <ListItemText
              className={classes.listItemText}
              primary={
                <Typography>
                  {event.User.email} {event.Action.content}
                  <Link to="/tasks" className={classes.linkContentColor}>
                    {" "}
                    {event.Task.title}
                  </Link>
                </Typography>
              }
              secondary={<DateTime date={event.createdAt} />}
            />
          </ListItem>
        ))}
      </List>
    </Card>
  );
};
HomeActivityCard.displayName = "HomeActivityCard";
export default HomeActivityCard;
