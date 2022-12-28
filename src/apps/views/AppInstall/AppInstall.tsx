import useNavigator from "@saleor/hooks/useNavigator";
import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

import {
  AppInstallUrlQueryParams,
  appsListUrl,
  MANIFEST_ATTR,
} from "../../urls";

interface InstallAppCreateProps extends RouteComponentProps {
  params: AppInstallUrlQueryParams;
}
export const InstallAppCreate: React.FC<InstallAppCreateProps> = ({
  params,
}) => {
  const navigate = useNavigator();
  const manifestUrl = params[MANIFEST_ATTR];

  useEffect(() => {
    if (manifestUrl) {
      // fetchManifest({ variables: { manifestUrl } });
    } else {
      navigate(appsListUrl());
    }
  }, []);

  return (
    <>
    </>
  );
};

export default InstallAppCreate;
