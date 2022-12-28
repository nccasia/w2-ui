import { appMessages } from "@saleor/apps/messages";
import NotFoundPage from "@saleor/components/NotFoundPage";
import useNotifier from "@saleor/hooks/useNotifier";
import React from "react";
import { useIntl } from "react-intl";

import AppPage from "../../components/AppPage";
import { appDetailsUrl, appsListPath } from "../../urls";

interface AppSettingsProps {
  id: string;
}

export const AppSettings: React.FC<AppSettingsProps> = ({ id }) => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const { data, refetch } = { data: null, refetch: () => {} }

  const appExists = data?.app !== null;

  const notify = useNotifier();
  const intl = useIntl();

  if (!appExists) {
    return <NotFoundPage backHref={appsListPath} />;
  }

  return (
    <AppPage
      data={data?.app}
      url={data?.app.configurationUrl}
      aboutHref={appDetailsUrl(id)}
      refetch={refetch}
      onError={() =>
        notify({
          status: "error",
          text: intl.formatMessage(appMessages.failedToFetchAppSettings),
        })
      }
    />
  );
};

export default AppSettings;
