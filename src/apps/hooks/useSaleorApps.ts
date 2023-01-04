import { useCallback, useState } from "react";

export interface SaleorApp {
  name: string;
  hostname: string;
}

const saleorAppsEnabled = false;

export const useSaleorApps = () => {
  const [apps, setApps] = useState<SaleorApp[] | undefined>(undefined);

  const fetchApps = useCallback(async () => {
    if (!saleorAppsEnabled) {
      return;
    }
    setApps([]);
  }, []);

  return {
    saleorAppsEnabled,
    apps,
    fetchApps,
  };
};
