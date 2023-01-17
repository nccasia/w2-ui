import Card from "@material-ui/core/Card/Card";
import ButtonWithSelect from "@saleor/components/ButtonWithSelect";
import Container from "@saleor/components/Container";
import { FilterElement } from "@saleor/components/Filter";
import FilterBar from "@saleor/components/FilterBar";
import PageHeader from "@saleor/components/PageHeader";
import { useGetTasksQuery } from "@saleor/graphql";
import { sectionNames } from "@saleor/intl";
import { mapEdgesToItems } from "@saleor/utils/maps";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import TaskList from "../TaskList/TaskList";

export interface TaskListPageProps {
  onAdd: () => void;
}

const TaskListPage: React.FC<TaskListPageProps> = ({ onAdd }) => {
  const { data } = useGetTasksQuery();
  const resultMapsEdges = mapEdgesToItems(data?.Task_connection);
  const intl = useIntl();
  return (
    <Container>
      <PageHeader title={intl.formatMessage(sectionNames.tasks)}>
        <ButtonWithSelect
          options={[]}
          data-test-id="create-task-button"
          onClick={onAdd}
        >
          <FormattedMessage
            id="K0G7T1"
            defaultMessage="Create task"
            description="button"
          />
        </ButtonWithSelect>
      </PageHeader>
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
      <TaskList tasks={resultMapsEdges} />
    </Container>
  );
};

export default TaskListPage;
