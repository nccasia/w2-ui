import { taskDefinitionChoiceMapper } from "@saleor/utils/mappers/taskDefinitionChoiceMapper";
import React from "react";

export const useTaskDefinitionChoiceType = data => {
  const choiceType = React.useMemo(
    () => taskDefinitionChoiceMapper(data ?? []),
    [data],
  );

  return { choiceType };
};
