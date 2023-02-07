// import { useGetTaskByBoardQuery } from "@saleor/graphql";
import React from "react";
import Board from "react-trello";
interface TaskBoardProps {
  data: any;
}
export const TaskBoard: React.FC<TaskBoardProps> = ({ data }) => {
  // const { data: dataView } = useGetTaskByBoardQuery({
  //    variables: {
  //       _eq: data.definitionId,
  //    },
  //  });
  // eslint-disable-next-line no-console
  console.log("1---", data);
  return (
    <>
      {data && <Board data={data} style={{ backgroundColor: "transparent" }} />}
    </>
  );
};
