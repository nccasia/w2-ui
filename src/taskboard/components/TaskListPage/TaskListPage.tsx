import SettingsIcon from "@material-ui/icons/Settings";
import ButtonWithSelect from "@saleor/components/ButtonWithSelect";
import Container from "@saleor/components/Container";
import PageHeader from "@saleor/components/PageHeader";
import { useGetTasksQuery } from "@saleor/graphql";
import useNavigator from "@saleor/hooks/useNavigator";
import { sectionNames } from "@saleor/intl";
import { Button } from "@saleor/macaw-ui";
import { mapEdgesToItems } from "@saleor/utils/maps";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import TaskList from "../TaskList/TaskList";

export interface TaskListPageProps {
  onAdd: () => void;
}

const TaskListPage: React.FC<TaskListPageProps> = ({ onAdd }) => {
  const { data } = useGetTasksQuery();
  const navigate = useNavigator();
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
            id="y26e0U"
            defaultMessage="New task"
            description="button"
          />
        </ButtonWithSelect>
        <Button
          variant="primary"
          style={{ marginLeft: 20, padding: 8 }}
          onClick={() => navigate(`/taskboard/workflow`)}
        >
          <SettingsIcon />
        </Button>
      </PageHeader>
      {/* <Card>
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
      </Card> */}
      <TaskList tasks={resultMapsEdges} />
    </Container>
  );
};

export default TaskListPage;
