import {
  Card,
  TableBody,
} from "@material-ui/core";
import { InstallWithManifestFormButton } from "@saleor/apps/components/InstallWithManifestFormButton";
import CardTitle from "@saleor/components/CardTitle";
import { ResponsiveTable } from "@saleor/macaw-ui";
import React, { useCallback } from "react";

import { useStyles } from "../../styles";


export interface InstalledAppsProps {
  appsList: any;
  onRemove: (id: string) => void;
  displayQuickManifestButton?: boolean;
  title: string;
}

const InstalledApps: React.FC<InstalledAppsProps> = ({
  title,
  displayQuickManifestButton = false,
  ...props
}) => {
  const classes = useStyles(props);
  // eslint-disable-next-line react-hooks/exhaustive-deps, @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  const navigate = (url: string) => {};

  const navigateToAppInstallPage = useCallback(
    (url: string) => {
      navigate(url);
    },
    [navigate],
  );

  return (
    <Card className={classes.apps}>
      <CardTitle
        title={title}
        toolbar={
          displayQuickManifestButton ? (
            <InstallWithManifestFormButton
              onSubmitted={navigateToAppInstallPage}
            />
          ) : (
            undefined
          )
        }
      />
      <ResponsiveTable>
        <TableBody>
         
        </TableBody>
      </ResponsiveTable>
    </Card>
  );
};

InstalledApps.displayName = "InstalledApps";
export default InstalledApps;
