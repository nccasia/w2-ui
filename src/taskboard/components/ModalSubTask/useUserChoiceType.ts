import { userChoiceMapper } from "@saleor/utils/mappers/userChoiceMapper ";
import React from "react";

export const useUserChoiceType = data => {
  const choiceType = React.useMemo(() => userChoiceMapper(data ?? []), [data]);

  return { choiceType };
};
