import NotFoundPage from "@saleor/components/NotFoundPage";
import useNavigator from "@saleor/hooks/useNavigator";
import createDialogActionHandlers from "@saleor/utils/handlers/dialogActionHandlers";
import React from "react";

import AppActivateDialog from "../../components/AppActivateDialog";
import AppDeactivateDialog from "../../components/AppDeactivateDialog";
import AppDetailsPage from "../../components/AppDetailsPage";
import {
  appDetailsUrl,
  AppDetailsUrlDialog,
  AppDetailsUrlQueryParams,
  appsListPath,
  appUrl,
} from "../../urls";

interface AppDetailsProps {
  id: string;
  params: AppDetailsUrlQueryParams;
}

export const AppDetails: React.FC<AppDetailsProps> = ({ id, params }) => {
  const { data, loading } = {
    data: null,
    loading: false,
  };

  const appExists = data?.app !== null;

  const navigate = useNavigator();
  // @ts-ignore
  const [openModal, closeModal] = createDialogActionHandlers<
    AppDetailsUrlDialog,
    AppDetailsUrlQueryParams
  >(navigate, params => appDetailsUrl(id, params), params);

  const handleActivateConfirm = () => true;
  const handleDeactivateConfirm = () => true;

  if (!appExists) {
    return <NotFoundPage backHref={appsListPath} />;
  }

  return (
    <>
      <AppActivateDialog
        confirmButtonState={null}
        name={data?.app.name}
        onClose={closeModal}
        onConfirm={handleActivateConfirm}
        open={params.action === "app-activate"}
      />
      <AppDeactivateDialog
        confirmButtonState={null}
        name={data?.app.name}
        onClose={closeModal}
        onConfirm={handleDeactivateConfirm}
        open={params.action === "app-deactivate"}
      />
      <AppDetailsPage
        data={data?.app}
        loading={loading}
        navigateToApp={() => navigate(appUrl(id))}
        onAppActivateOpen={() => openModal("app-activate")}
        onAppDeactivateOpen={() => openModal("app-deactivate")}
      />
    </>
  );
};

export default AppDetails;
