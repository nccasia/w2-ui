import { useUserPermissions } from "@saleor/auth/hooks/useUserPermissions";
import { RelayToFlat } from "@saleor/types";
import { mapEdgesToItems } from "@saleor/utils/maps";

import { AppData, useExternalApp } from "./components/ExternalAppContext";
import { AppDetailsUrlMountQueryParams } from "./urls";

export interface Extension {
  id: string;
  app: RelayToFlat<any>;
  accessToken: string;
  permissions: any[];
  label: string;
  mount: any;
  url: string;
  open(): void;
}

export interface ExtensionWithParams extends Omit<Extension, "open"> {
  open(params: AppDetailsUrlMountQueryParams): void;
}

export const extensionMountPoints = {
};

const filterAndMapToTarget = (
  extensions: RelayToFlat<any>,
  openApp: (appData: AppData) => void,
): ExtensionWithParams[] =>
  extensions.map(
    ({ id, accessToken, permissions, url, label, mount, target, app }) => ({
      id,
      app,
      accessToken,
      permissions: permissions.map(({ code }) => code),
      url,
      label,
      mount,
      open: (params: AppDetailsUrlMountQueryParams) =>
        openApp({
          id: app.id,
          appToken: accessToken,
          src: url,
          label,
          target,
          params,
        }),
    }),
  );

const mapToMenuItem = ({ label, id, open }: Extension) => ({
  label,
  testId: `extension-${id}`,
  onSelect: open,
});

export const mapToMenuItems = (extensions: ExtensionWithParams[]) =>
  extensions.map(mapToMenuItem);

export const mapToMenuItemsForProductOverviewActions = (
  extensions: ExtensionWithParams[],
  productIds: string[],
) =>
  extensions.map(extension =>
    mapToMenuItem({ ...extension, open: () => extension.open({ productIds }) }),
  );

export const mapToMenuItemsForProductDetails = (
  extensions: ExtensionWithParams[],
  productId: string,
) =>
  extensions.map(extension =>
    mapToMenuItem({ ...extension, open: () => extension.open({ productId }) }),
  );

export const mapToMenuItemsForCustomerDetails = (
  extensions: ExtensionWithParams[],
  customerId: string,
) =>
  extensions.map(extension =>
    mapToMenuItem({ ...extension, open: () => extension.open({ customerId }) }),
  );

export const mapToMenuItemsForCustomerOverviewActions = (
  extensions: ExtensionWithParams[],
  customerIds: string[],
) =>
  extensions.map(extension =>
    mapToMenuItem({
      ...extension,
      open: () => extension.open({ customerIds }),
    }),
  );

export const mapToMenuItemsForOrderDetails = (
  extensions: ExtensionWithParams[],
  orderId?: string,
) =>
  extensions.map(extension =>
    mapToMenuItem({
      ...extension,
      open: () => extension.open({ orderId }),
    }),
  );

export const useExtensions = <T extends any = any>(
  _mountList: T[],
): Record<any, Extension[]> => ({});
