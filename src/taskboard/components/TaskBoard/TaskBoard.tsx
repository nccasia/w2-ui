import React, { useMemo } from "react";
import Board from "react-trello";
interface TaskBoardProps {
  data: any;
}
const test = {
  data: [
    {
      id: "COR555",
      title: "Change Office Request",
      description: "Change Office Request",
      label: "30 mins",
      status: "Done",
      draggable: false,
    },
    {
      id: "COR11",
      title: "Change",
      description: "Change Office Request",
      label: "30 mins",
      status: "Request",
      draggable: false,
    },
  ],
};
export const TaskBoard: React.FC<TaskBoardProps> = ({ data }) => {
  // const { data } = useGetTasksQueryLazy();
  const convertData = useMemo(() => {
    let result;
    if (data?.viewConfig) {
      result = {
        lanes: data?.viewConfig.map(e => {
          return {
            id: e,
            title: e,
            label: "2/2",
            cards: test.data.filter(item => {
              if (item.status === e) {
                return {
                  id: item.id,
                  title: item.title,
                  description: item.description,
                  label: "30 mins",
                  draggable: false,
                };
              }
            }),
          };
        }),
      };
      return result;
    }
  }, [data]);

  return (
    <>
      <Board data={convertData} style={{ backgroundColor: "transparent" }} />
    </>
  );
};
