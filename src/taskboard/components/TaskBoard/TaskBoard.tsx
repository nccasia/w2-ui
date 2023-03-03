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
  viewByStatus: boolean;
}

const laneConfig = ["TODO", "DOING", "DONE"];

const convertTaskCard = (view, state, taskEdges) => {
  const result = [];
  for (const item of taskEdges) {
    if (view === "status") {
      if (item.node.status === state) {
        result.push({
          id: item.node.id,
          title: item.node.title,
          description: (
            <p dangerouslySetInnerHTML={{ __html: item.node.description }} />
          ),
          draggable: false,
        });
      }
    } else {
      if (item.node.state === state) {
        result.push({
          id: item.node.id,
          title: item.node.title,
          description: (
            <p dangerouslySetInnerHTML={{ __html: item.node.description }} />
          ),
          draggable: false,
        });
      }
    }
  }
  return result;
};
export const TaskBoard: React.FC<TaskBoardProps> = ({
  taskBoardData,
  viewByStatus,
}) => {
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

  const result = useMemo(() => {
    if (data?.Task_connection.edges) {
      return {
        lanes: laneConfig.map((element, index) => {
          return {
            id: index,
            title: element,
            state: element,
            cards: convertTaskCard(
              "status",
              element,
              data?.Task_connection.edges,
            ),
          };
        }),
      };
    }
  }, [data, fetch]);

  const viewConfig = useMemo(() => {
    if (!taskBoardData || !data) {
      return null;
    }
    return {
      ...taskBoardData.viewConfig,
      lanes: taskBoardData.viewConfig.lanes.map(lane => {
        return {
          ...lane,
          cards: convertTaskCard(
            "state",
            lane.state,
            data.Task_connection.edges,
          ),
        };
      }),
    };
  }, [data, taskBoardData]);

  const handleClickCard = id => {
    navigate(taskUrl(id));
  };
  return (
    <>
      {viewByStatus ? (
        <Board
          data={result}
          style={{ backgroundColor: "transparent" }}
          onCardClick={cardId => handleClickCard(cardId)}
        />
      ) : (
        data && (
          <Board
            data={viewConfig}
            style={{ backgroundColor: "transparent" }}
            onCardClick={cardId => handleClickCard(cardId)}
          />
        )
      )}
    </>
  );
};
