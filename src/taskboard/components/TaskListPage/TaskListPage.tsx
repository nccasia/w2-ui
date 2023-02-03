import Card from "@material-ui/core/Card/Card";
import { useUser } from "@saleor/auth";
import ButtonWithSelect from "@saleor/components/ButtonWithSelect";
import Container from "@saleor/components/Container";
import { FilterElement } from "@saleor/components/Filter";
import FilterBar from "@saleor/components/FilterBar";
import PageHeader from "@saleor/components/PageHeader";
import { useTaskBoard } from "@saleor/hooks/useTaskBoard";
import { sectionNames } from "@saleor/intl";
import { Button } from "@saleor/macaw-ui";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { TaskBoard } from "../TaskBoard/TaskBoard";
import TaskList from "../TaskList/TaskList";
export interface TaskListPageProps {
  onAdd: () => void;
  id: string;
}

const TaskListPage: React.FC<TaskListPageProps> = ({ onAdd, id }) => {
  const user = useUser();
  const intl = useIntl();
  const data = useTaskBoard(id);

  // const dataBoard = useConfigTaskList(id);

  return (
    <Container>
      <PageHeader title={intl.formatMessage(sectionNames.tasks)}>
        <Button variant="primary">
          <FormattedMessage
            id="cF1/Vc"
            defaultMessage="Workflow"
            description="button"
          />
        </Button>
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
      </PageHeader>
      {data.type === "board" && <TaskBoard data={data}></TaskBoard>}
      {data.type === "list" && (
        <>
          <Card>
            <FilterBar
              searchPlaceholder={intl.formatMessage({
                id: "Ut9v0j",
                defaultMessage: "Search Tasks...",
              })}
              filterStructure={[]}
              onFilterChange={function(
                _filter: Array<FilterElement<string>>,
              ): void {
                throw new Error("Function not implemented.");
              }}
              allTabLabel={intl.formatMessage({
                id: "w6eP7m",
                defaultMessage: "All Tasks",
                description: "tab name",
              })}
              initialSearch={""}
              onSearchChange={function(_value: string): void {
                throw new Error("Function not implemented.");
              }}
              currentTab={0}
              tabs={[]}
              onAll={function(): void {
                throw new Error("Function not implemented.");
              }}
              onTabChange={function(_tab: number): void {
                throw new Error("Function not implemented.");
              }}
              onTabDelete={function(): void {
                throw new Error("Function not implemented.");
              }}
              onTabSave={function(): void {
                throw new Error("Function not implemented.");
              }}
            />
          </Card>
          <TaskList id={user.user.userId} />
        </>
      )}
    </Container>
  );
};

export default TaskListPage;
