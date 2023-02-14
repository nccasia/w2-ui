import SettingsIcon from "@material-ui/icons/Settings";
import { useUser } from "@saleor/auth";
import ButtonWithSelect from "@saleor/components/ButtonWithSelect";
import Container from "@saleor/components/Container";
import PageHeader from "@saleor/components/PageHeader";
import {
  TaskBoardFragmentFragment,
  TaskFragmentFragment,
} from "@saleor/graphql";
import useNavigator from "@saleor/hooks/useNavigator";
import { sectionNames } from "@saleor/intl";
import { Button } from "@saleor/macaw-ui";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { TaskBoard } from "../TaskBoard/TaskBoard";
import TaskList from "../TaskList/TaskList";
export interface TaskListPageProps {
  onAdd: () => void;
  dataTaskBoard: TaskBoardFragmentFragment;
  data: TaskFragmentFragment[];
}

const TaskListPage: React.FC<TaskListPageProps> = ({
  onAdd,
  dataTaskBoard,
  data,
}) => {
  const user = useUser();
  const intl = useIntl();
  const navigate = useNavigator();

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
          onClick={() => navigate(`/taskboard/workflow`)}
        >
          <SettingsIcon />
        </Button>
      </PageHeader>
      {dataTaskBoard.viewType === "Kanban" && (
        <TaskBoard taskBoardData={dataTaskBoard}></TaskBoard>
      )}
      {dataTaskBoard.viewType === "list" && (
        <TaskList id={user.user.userId} data={data} />
      )}
    </Container>
  );
};

export default TaskListPage;
