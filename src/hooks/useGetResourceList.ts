import { categoryDevice, offices } from "@saleor/utils/resource";
import { useMemo } from "react";

export function useGetResourceList(fieldName: string) {
  const options = useMemo(() => {
    switch (fieldName) {
      case "type":
        return categoryDevice;
      case "currentOffice":
        return offices;
      case "destinationOffice":
        return offices;
      default:
        break;
    }
  }, [fieldName]);
  return { options };
}
