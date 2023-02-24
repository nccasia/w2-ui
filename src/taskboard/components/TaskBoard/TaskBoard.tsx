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
// interface IResult {

// }

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
      const groupByStatus = data.Task_connection.edges.reduce((d, v) => {
        if (!(v.node.status in d)) {
          return {
            ...d,
            [v.node.status]: [v],
          };
        }
        return { ...d, [v.node.status]: [...d[v.node.status], v] };
      }, {});

      const getKey = Object.keys(groupByStatus);
      return {
        lanes: getKey.map((e, index) => {
          return {
            id: index,
            cards: groupByStatus[e].map(c => {
              return {
                id: c.node.id,
                title: c.node.title,
                state: c.node.title,
                description: c.node.description,
              };
            }),
            title: e,
          };
        }),
      };
    }
  }, [data]);

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
