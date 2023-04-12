import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Switch,
} from "@material-ui/core";
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
import { ViewOptionsState } from "@saleor/taskboard/views/TaskList";
import { EViewOptions } from "@saleor/taskboard/views/TaskList/const";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { TaskBoard } from "../TaskBoard/TaskBoard";
import TaskList from "../TaskList/TaskList";
export interface TaskListPageProps {
  onAdd: () => void;
  dataTaskBoard: TaskBoardFragmentFragment;
  data: TaskFragmentFragment[];
  viewOptions: ViewOptionsState;
  setViewOptions: React.Dispatch<React.SetStateAction<ViewOptionsState>>;
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

const useStyles = makeStyles(
  theme => ({
    settingViewContainer: {
      padding: "8px",
    },
    settingViewTitle: {
      marginBottom: 0,
    },
    formControl: {
      minWidth: 140,
      "& .MuiSelect-root": {
        fontSize: 13,
        padding: "22px 37px 5px 12px",
      },
      "& .MuiFormLabel-root.MuiInputLabel-root": {
        fontSize: 13,
        color: theme.palette.type === "dark" ? "#fff" : "#333",
      },
    },
    formMenuItem: {
      fontSize: 13,
      minHeight: 42,
    },
  }),
  { name: "TaskListPage" },
);

const TaskListPage: React.FC<TaskListPageProps> = ({
  onAdd,
  dataTaskBoard,
  data,
  viewOptions,
  setViewOptions,
}) => {
  const classes = useStyles();
  const user = useUser();
  const intl = useIntl();

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
        {dataTaskBoard.viewType === "Kanban" ? (
          <PopoverCustom>
            <div className={classes.settingViewContainer}>
              <h3 className={classes.settingViewTitle}>View Option</h3>
              <FormControl fullWidth>
                <FormControlLabel
                  control={
                    <Switch
                      disableRipple
                      checked={viewOptions.filterStatus}
                      onChange={e =>
                        setViewOptions(prev => ({
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
            </div>
          </PopoverCustom>
        ) : (
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="view-options">View Options</InputLabel>
            <Select
              labelId="view-options"
              id="view-options"
              value={viewOptions.filterByRequest}
              onChange={e =>
                setViewOptions(prev => ({
                  ...prev,
                  filterByRequest: e.target.value as EViewOptions,
                }))
              }
            >
              <MenuItem
                className={classes.formMenuItem}
                value={EViewOptions.ALL}
              >
                All
              </MenuItem>
              <MenuItem
                className={classes.formMenuItem}
                value={EViewOptions.MY_REQUEST}
              >
                My Request
              </MenuItem>
              <MenuItem
                className={classes.formMenuItem}
                value={EViewOptions.MY_PARTICIPANT}
              >
                My Participant
              </MenuItem>
            </Select>
          </FormControl>
        )}
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
