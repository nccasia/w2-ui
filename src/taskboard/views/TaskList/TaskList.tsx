import { useUser } from "@saleor/auth";
import {
  TaskFragmentFragment,
  useGetMyParticipantTaskLazyQuery,
  useGetMyRequestTaskLazyQuery,
  useGetMyTasksLazyQuery,
} from "@saleor/graphql";
import useNavigator from "@saleor/hooks/useNavigator";
import usePaginator, {
  PaginationState,
  PaginatorContext,
} from "@saleor/hooks/usePaginator";
import { useTaskBoard } from "@saleor/hooks/useTaskBoard";
import TaskCreation from "@saleor/taskboard/components/TaskCreation/TaskCreation";
import TaskListPage from "@saleor/taskboard/components/TaskListPage";
import {
  modalNewTaskUrl,
  TaskListUrlDialog,
  TaskListUrlQueryParams,
} from "@saleor/taskboard/urls";
import { Pagination } from "@saleor/types";
import createDialogActionHandlers from "@saleor/utils/handlers/dialogActionHandlers";
import { mapEdgesToItems } from "@saleor/utils/maps";
import React, { useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router";

import { EViewOptions } from "./const";

export interface ViewOptionsState {
  filterStatus: boolean;
  filterByRequest: EViewOptions;
}

const initViewOption: ViewOptionsState = {
  filterStatus: false,
  filterByRequest: EViewOptions.ALL,
};

interface TaskListProps {
  params: TaskListUrlQueryParams;
  id: string;
  variables: PaginationState;
  qs: any;
  setQs: React.Dispatch<React.SetStateAction<Pagination>>;
  setRowNumber?: React.Dispatch<React.SetStateAction<number>>;
}

export const TaskList: React.FC<TaskListProps> = ({
  params,
  id,
  variables,
  setQs,
  setRowNumber,
}) => {
  const user = useUser();
  const navigate = useNavigator();
  const { channel } = {
    channel: undefined,
  };
  const dataTaskBoard = useTaskBoard(id);
  const history = useHistory();

  const [viewOptions, setViewOptions] = useState<ViewOptionsState>(
    initViewOption,
  );

  const [fetchMyTask, { data: myTaskData }] = useGetMyTasksLazyQuery();
  const [
    fetchMyRequestTask,
    { data: myRequestTaskData },
  ] = useGetMyRequestTaskLazyQuery();
  const [
    fetchMyParticipantTask,
    { data: myParticipantTaskData },
  ] = useGetMyParticipantTaskLazyQuery();

  const data = useMemo(() => {
    return viewOptions.filterByRequest === EViewOptions.ALL
      ? myTaskData
      : viewOptions.filterByRequest === EViewOptions.MY_REQUEST
      ? myRequestTaskData
      : viewOptions.filterByRequest === EViewOptions.MY_PARTICIPANT
      ? myParticipantTaskData
      : undefined;
  }, [
    viewOptions.filterByRequest,
    myParticipantTaskData,
    myRequestTaskData,
    myTaskData,
  ]);

  const paginationValues = usePaginator({
    pageInfo: data?.Task_connection.pageInfo,
    paginationState: variables,
    queryString: {},
  });

  const noTaskType = !channel && typeof channel !== "undefined";
  const [openModal, closeModal] = createDialogActionHandlers<
    TaskListUrlDialog,
    TaskListUrlQueryParams
  >(navigate, modalNewTaskUrl, params, id);

  useEffect(() => {
    setQs({});
    history.replace({
      search: "",
    });
  }, [viewOptions.filterByRequest, setQs]);

  useEffect(() => {
    if (user.user.userId) {
      const temp = {
        ...variables,
        id: user.user.userId,
      };

      // eslint-disable-next-line chai-friendly/no-unused-expressions
      viewOptions.filterByRequest === EViewOptions.ALL
        ? fetchMyTask({
            variables: temp,
          })
        : viewOptions.filterByRequest === EViewOptions.MY_REQUEST
        ? fetchMyRequestTask({
            variables: temp,
          })
        : viewOptions.filterByRequest === EViewOptions.MY_PARTICIPANT
        ? fetchMyParticipantTask({
            variables: temp,
          })
        : undefined;
    }
  }, [
    user.user.userId,
    variables,
    viewOptions.filterByRequest,
    fetchMyTask,
    fetchMyRequestTask,
    fetchMyParticipantTask,
  ]);

  return (
    <>
      <PaginatorContext.Provider value={{ ...paginationValues, setRowNumber }}>
        <TaskListPage
          onAdd={() => openModal("create-task")}
          data={
            (mapEdgesToItems(
              data?.Task_connection,
            ) as unknown) as TaskFragmentFragment[]
          }
          dataTaskBoard={dataTaskBoard}
          viewOptions={viewOptions}
          setViewOptions={setViewOptions}
        />
        {!noTaskType && (
          <TaskCreation
            open={params.action === "create-task"}
            onClose={closeModal}
            id={id}
          />
        )}
      </PaginatorContext.Provider>
    </>
  );
};

export default TaskList;
