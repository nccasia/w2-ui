import { FormControlLabel, Switch } from "@material-ui/core";
import { useUser } from "@saleor/auth";
import ButtonWithSelect from "@saleor/components/ButtonWithSelect";
import Container from "@saleor/components/Container";
import PageHeader from "@saleor/components/PageHeader";
import {
  TaskBoardFragmentFragment,
  TaskFragmentFragment,
} from "@saleor/graphql";
import { sectionNames } from "@saleor/intl";
import { makeStyles, PopoverCustom } from "@saleor/macaw-ui";
import React, { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import Board from "react-trello";

import { TaskBoard } from "../TaskBoard/TaskBoard";
import TaskList from "../TaskList/TaskList";
export interface TaskListPageProps {
  onAdd: () => void;
  dataTaskBoard: TaskBoardFragmentFragment;
  data: TaskFragmentFragment[];
}

const useStyles = makeStyles(
  () => ({
    settingViewContainer: {
      padding: "8px",
    },
    settingViewTitle: {
      marginBottom: 0,
    },
  }),
  { name: "TaskListPage" },
);

const dataTest = {
  lanes: [
    {
      id: "lane1",
      cards: [],
      label: "",
      state: "DOING",
      title: "DOING",
    },
    {
      id: "lane2",
      cards: [],
      label: "",
      state: "DONE",
      title: "DONE",
    },
  ],
};
const TaskListPage: React.FC<TaskListPageProps> = ({
  onAdd,
  dataTaskBoard,
  data,
}) => {
  const classes = useStyles();
  const user = useUser();
  const intl = useIntl();
  const [viewByStatus, setViewByStatus] = useState<boolean>(false);

  return (
    <Container>
      <PageHeader title={intl.formatMessage(sectionNames.tasks)}>
        <ButtonWithSelect
          options={[]}
          data-test-id="create-task-button"
          onClick={onAdd}
          style={{ marginRight: 20 }}
        >
          <FormattedMessage
            id="y26e0U"
            defaultMessage="New task"
            description="button"
          />
        </ButtonWithSelect>
        <PopoverCustom>
          <div className={classes.settingViewContainer}>
            <h3 className={classes.settingViewTitle}>Setting views</h3>
            <FormControlLabel
              control={<Switch checked={viewByStatus} disableRipple />}
              label={intl.formatMessage({
                id: "42CeNi",
                defaultMessage: "View By Status",
                description: "button",
              })}
              onChange={() => {
                setViewByStatus(!viewByStatus);
              }}
            />
          </div>
        </PopoverCustom>
      </PageHeader>
      {dataTaskBoard.viewType === "Kanban" &&
        (viewByStatus ? (
          <div>
            <Board data={dataTest} style={{ backgroundColor: "transparent" }} />
          </div>
        ) : (
          <TaskBoard taskBoardData={dataTaskBoard}></TaskBoard>
        ))}
      {dataTaskBoard.viewType === "list" && (
        <TaskList id={user.user.userId} data={data} />
      )}
    </Container>
  );
};

export default TaskListPage;
