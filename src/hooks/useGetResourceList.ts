import { useGetResourceItemsQuery } from "@saleor/graphql";
import { createRelayId } from "@saleor/utils/createRelayId";
import { useMemo } from "react";

export function useGetResourceList(resourceId: number) {
  const resourceIdRelay = createRelayId([1, "public", "Resource", resourceId]);
  const { data } = useGetResourceItemsQuery({
    variables: {
      id: resourceIdRelay,
    },
  });
  // eslint-disable-next-line no-console
  console.log(
    "🚀 ~ file: useGetResourceList.ts:12 ~ useGetResourceList ~ data",
    data,
  );

  const options = useMemo(() => {
    if (!data || !data.node || data.node.__typename !== "Resource") {
      return [];
    }
    const result = data?.node?.ResourceItems?.map(item => {
      return {
        value: item.id,
        label: item.name,
      };
    });
    return result;
  }, [data]);

  return { options };
}
