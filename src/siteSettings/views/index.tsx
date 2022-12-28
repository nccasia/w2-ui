import { WindowTitle } from "@saleor/components/WindowTitle";
import useNotifier from "@saleor/hooks/useNotifier";
import { sectionNames } from "@saleor/intl";
import { findInEnum } from "@saleor/misc";
import React from "react";
import { useIntl } from "react-intl";

import SiteSettingsPage, {
  areAddressInputFieldsModified,
  SiteSettingsPageFormData,
} from "../components/SiteSettingsPage";
import { SiteSettingsUrlQueryParams } from "../urls";

export interface SiteSettingsProps {
  params: SiteSettingsUrlQueryParams;
}

export const SiteSettings: React.FC<SiteSettingsProps> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const notify = useNotifier();
  const intl = useIntl();

 const siteSettings = { loading: false };
 const updateShopSettingsOpts = { loading: false }

  const errors = [
   
  ];
  const loading = siteSettings.loading || updateShopSettingsOpts.loading;

  const handleUpdateShopSettings = async (data: SiteSettingsPageFormData) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const addressInput = areAddressInputFieldsModified(data)
      ? {
          city: data.city,
          companyName: data.companyName,
          country: findInEnum(data.country, null),
          countryArea: data.countryArea,
          phone: data.phone,
          postalCode: data.postalCode,
          streetAddress1: data.streetAddress1,
          streetAddress2: data.streetAddress2,
        }
      : {
          companyName: data.companyName,
        };

    return null;
  };

  return (
    <>
      <WindowTitle title={intl.formatMessage(sectionNames.siteSettings)} />
      <SiteSettingsPage
        disabled={loading}
        errors={errors}
        shop={null}
        onSubmit={handleUpdateShopSettings}
        saveButtonBarState={null}
      />
    </>
  );
};
export default SiteSettings;
