import Card from "@material-ui/core/Card/Card";
import {
  extensionMountPoints,
  mapToMenuItems,
  useExtensions,
} from "@saleor/apps/useExtensions";
import ButtonWithSelect from "@saleor/components/ButtonWithSelect";
import Container from "@saleor/components/Container";
import { FilterElement } from "@saleor/components/Filter";
import FilterBar from "@saleor/components/FilterBar";
import PageHeader from "@saleor/components/PageHeader";
import { sectionNames } from "@saleor/intl";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import TaskList from "../TaskList/TaskList";

interface TaskListPageProps {
  onAdd: () => void;
}

const TaskListPage: React.FC<TaskListPageProps> = ({ onAdd }) => {
  const intl = useIntl();
  const { ORDER_OVERVIEW_CREATE } = useExtensions(
    extensionMountPoints.ORDER_LIST,
  );
  const extensionCreateButtonItems = mapToMenuItems(ORDER_OVERVIEW_CREATE);
  return (
    <Container>
      <PageHeader title={intl.formatMessage(sectionNames.tasks)}>
        <ButtonWithSelect
          options={extensionCreateButtonItems}
          data-test-id="create-order-button"
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
      <TaskList />
    </Container>
  );
};

export default TaskListPage;
