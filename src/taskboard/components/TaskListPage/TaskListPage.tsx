import { FormControl, FormControlLabel, Switch } from "@material-ui/core";
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

export interface FilterOptionState {
  filterStatus: boolean;
  filterRequest: boolean;
  filterPaticipant: boolean;
}

const initFilterOption: FilterOptionState = {
  filterStatus: false,
  filterRequest: false,
  filterPaticipant: false,
};

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

const TaskListPage: React.FC<TaskListPageProps> = ({
  onAdd,
  dataTaskBoard,
  data,
}) => {
  const classes = useStyles();
  const user = useUser();
  const intl = useIntl();

  const [filterOption, setFilterOption] = useState<FilterOptionState>(
    initFilterOption,
  );

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
            <h3 className={classes.settingViewTitle}>Views Options</h3>
            {dataTaskBoard.viewType === "Kanban" ? (
              <FormControl fullWidth>
                <FormControlLabel
                  control={
                    <Switch
                      disableRipple
                      value={filterOption.filterStatus}
                      onChange={e =>
                        setFilterOption(prev => ({
                          ...prev,
                          filterStatus: e.target.checked,
                        }))
                      }
                    />
                  }
                  label={intl.formatMessage({
                    defaultMessage: "View By Status",
                    id: "42CeNi",
                    description: "button",
                  })}
                />
              </FormControl>
            ) : (
              <>
                <FormControl fullWidth>
                  <FormControlLabel
                    control={
                      <Switch
                        disableRipple
                        value={filterOption.filterRequest}
                        onChange={e =>
                          setFilterOption(prev => ({
                            ...prev,
                            filterRequest: e.target.checked,
                          }))
                        }
                      />
                    }
                    label={intl.formatMessage({
                      defaultMessage: "My Requests",
                      id: "feBHnx",
                      description: "button",
                    })}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <FormControlLabel
                    control={
                      <Switch
                        disableRipple
                        value={filterOption.filterPaticipant}
                        onChange={e =>
                          setFilterOption(prev => ({
                            ...prev,
                            filterPaticipant: e.target.checked,
                          }))
                        }
                      />
                    }
                    label={intl.formatMessage({
                      id: "d0Dxii",
                      defaultMessage: "My Participations",
                      description: "button",
                    })}
                  />
                </FormControl>
              </>
            )}
          </div>
        </PopoverCustom>
      </PageHeader>
      {dataTaskBoard.viewType === "Kanban" && (
        <TaskBoard
          taskBoardData={dataTaskBoard}
          viewByStatus={false}
        ></TaskBoard>
      )}
      {dataTaskBoard.viewType === "list" && (
        <TaskList id={user.user.userId} data={data} />
      )}
    </Container>
  );
};

export default TaskListPage;
