import {
  TaskBoardFragmentFragment,
  useGetTaskByBoardLazyQuery,
} from "@saleor/graphql";
import useNavigator from "@saleor/hooks/useNavigator";
import { taskUrl } from "@saleor/taskboard/urls";
import React, { useEffect, useMemo } from "react";
import Board from "react-trello";
interface TaskBoardProps {
  taskBoardData: TaskBoardFragmentFragment;
}
const convertTaskCard = (state, taskEdges) => {
  const result = [];
  for (const item of taskEdges) {
    if (item.node.state === state) {
      result.push({
        id: item.node.id,
        title: item.node.title,
        description: item.node.description,
        draggable: false,
      });
    }
  }
  return result;
};
export const TaskBoard: React.FC<TaskBoardProps> = ({ taskBoardData }) => {
  const navigate = useNavigator();
  const [fetch, { data }] = useGetTaskByBoardLazyQuery();
  useEffect(() => {
    if (taskBoardData.taskDefinitionId) {
      fetch({
        variables: {
          definitionId: taskBoardData.taskDefinitionId,
        },
      });
    }
  }, [taskBoardData]);
  const viewConfig = useMemo(() => {
    if (!taskBoardData || !data) {
      return null;
    }
    return {
      ...taskBoardData.viewConfig,
      lanes: taskBoardData.viewConfig.lanes.map(lane => {
        return {
          ...lane,
          cards: convertTaskCard(lane.state, data.Task_connection.edges),
        };
      }),
    };
  }, [data]);
  const handleClickCard = id => {
    navigate(taskUrl(id));
  };
  return (
    <>
      {data && (
        <Board
          data={viewConfig}
          style={{ backgroundColor: "transparent" }}
          onCardClick={cardId => handleClickCard(cardId)}
        />
      )}
    </>
  );
};
