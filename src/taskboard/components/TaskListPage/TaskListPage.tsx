import { FormControlLabel, Popover, Switch } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import { useUser } from "@saleor/auth";
import ButtonWithSelect from "@saleor/components/ButtonWithSelect";
import Container from "@saleor/components/Container";
import PageHeader from "@saleor/components/PageHeader";
import {
  TaskBoardFragmentFragment,
  TaskFragmentFragment,
} from "@saleor/graphql";
import { sectionNames } from "@saleor/intl";
import { Button } from "@saleor/macaw-ui";
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
// const useStyles = makeStyles(
//   () => ({
//     test: {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//     },
//   }), { name: "TaskListPage" }
// )

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
  // const classes = useStyles();
  const user = useUser();
  const intl = useIntl();
  const [openSetting, setOpenSetting] = useState<boolean>(false);
  const [viewByStatus, setViewByStatus] = useState<boolean>(false);

  return (
    <Container>
      <PageHeader title={intl.formatMessage(sectionNames.tasks)}>
        <ButtonWithSelect
          options={[]}
          data-test-id="create-task-button"
          onClick={onAdd}
        >
          <FormattedMessage
            id="y26e0U"
            defaultMessage="New task"
            description="button"
          />
        </ButtonWithSelect>
        <Button
          style={{ marginLeft: 20, padding: "8px 0 8px 8px" }}
          onClick={() => setOpenSetting(true)}
        >
          <SettingsIcon />
        </Button>
        <Popover
          open={openSetting}
          onClose={() => setOpenSetting(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <div>
            <h1>Setting views</h1>
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
        </Popover>
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
