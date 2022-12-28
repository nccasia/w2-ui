import CustomAppCreatePage from "@saleor/apps/components/CustomAppCreatePage";
import { WindowTitle } from "@saleor/components/WindowTitle";
import useShop from "@saleor/hooks/useShop";
import React from "react";
import { useIntl } from "react-intl";

import { messages } from "./messages";

interface CustomAppCreateProps {
  setToken: (token: string) => void;
}
export const CustomAppCreate: React.FC<CustomAppCreateProps> = ({}) => {
  const intl = useIntl();
  const shop = useShop();

  return (
    <>
      <WindowTitle title={intl.formatMessage(messages.createApp)} />
      <CustomAppCreatePage
        disabled={false}
        errors={[]}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onSubmit={() => {}}
        permissions={shop?.permissions}
        saveButtonBarState={'default'}
      />
    </>
  );
};

export default CustomAppCreate;
