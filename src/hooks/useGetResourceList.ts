import { useGetResourceQuery } from "@saleor/graphql";
import { useMemo } from "react";

export function useGetResourceList(resourceId: number) {
  const { data } = useGetResourceQuery({
    variables: {
      id: resourceId,
    },
  });

  const options = useMemo(() => {
    if (!data) {
      return [];
    }
    const result = data.Resource_by_pk.ResourceItems.map(item => {
      return {
        value: item.id.toString(),
        label: item.name,
      };
    });
    return result;
  }, [data]);

  return { options };
}
