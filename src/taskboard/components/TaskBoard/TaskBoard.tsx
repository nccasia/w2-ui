import React, { useMemo } from "react";
import Board from "react-trello";
interface TaskBoardProps {
  data: any;
}
export const TaskBoard: React.FC<TaskBoardProps> = ({ data }) => {
  const convertData = useMemo(() => {
    // eslint-disable-next-line no-console
    console.log("===", data);
    let result;
    if (data.Task_connection.edges) {
      result = {
        lanes: data.Task_connection.edges.map(item => {
          return {
            id: `${item.node.id}`,
            title: `${item.node.title}`,
            label: "2/2",
            cards: [
              {
                id: `${item.node.id}card1`,
                title: "Write Blog",
                description: "Can AI make memes",
                label: "30 mins",
                draggable: false,
              },
              {
                id: `${item.node.id}card2`,
                title: "Pay Rent",
                description: "Transfer via NEFT",
                label: "5 mins",
                metadata: { sha: "be312a1" },
              },
            ],
          };
        }),
      };
      // eslint-disable-next-line no-console
      console.log("===333333333333", result);
      return result;
    }
  }, [data]);
  // eslint-disable-next-line no-console
  console.log("1-------", convertData);

  return (
    <>
      <Board data={convertData} />
    </>
  );
};
