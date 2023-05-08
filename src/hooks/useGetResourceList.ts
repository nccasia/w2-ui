import { useUser } from "@saleor/auth";
import { useGetResourceItemsQuery } from "@saleor/graphql";
import { createRelayId } from "@saleor/utils/createRelayId";
import { useMemo } from "react";

export function useGetResourceList(resourceId: number) {
  const { user } = useUser();
  const resourceIdRelay = createRelayId([1, "public", "Resource", resourceId]);
  const { data } = useGetResourceItemsQuery({
    variables: {
      id: resourceIdRelay,
    },
  });

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

  const officeUser = useMemo(() => {
    if (!data || !data.node || data.node.__typename !== "Resource") {
      return;
    }
    const office = data?.node?.ResourceItems?.find(item => {
      const officeName = item.name.split(" ");
      const office =
        officeName[0]?.charAt(0) +
        (officeName[1]?.charAt(0) || "") +
        (officeName[2]?.charAt(0) || "");
      return office === user?.branchCode;
    });
    return office;
  }, [data, user?.branchCode]);

  const defaultOffice = useMemo(
    () => options?.find(item => item.label === officeUser?.name),
    [officeUser?.name, options],
  );

  return { options, defaultOffice };
}
