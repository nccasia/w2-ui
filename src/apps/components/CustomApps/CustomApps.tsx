import { Card, TableBody } from "@material-ui/core";
import { customAppAddUrl } from "@saleor/apps/urls";
import { Button } from "@saleor/components/Button";
import CardTitle from "@saleor/components/CardTitle";
import { commonMessages } from "@saleor/intl";
import { ResponsiveTable } from "@saleor/macaw-ui";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { useStyles } from "../../styles";

export interface CustomAppsProps {
  appsList: any;
  getCustomAppHref: (id: string) => string;
  onRemove: (id: string) => void;
}

const CustomApps: React.FC<CustomAppsProps> = ({

}) => {
  const intl = useIntl();
  const classes = useStyles({});

  return (
    <Card className={classes.customApps}>
      <CardTitle
        toolbar={
          <Button
            variant="secondary"
            href={customAppAddUrl}
            data-test-id="create-app"
          >
            <FormattedMessage
              id="XB2Jj9"
              defaultMessage="Create App"
              description="create app button"
            />
          </Button>
        }
        title={intl.formatMessage(commonMessages.customApps)}
      />
      <ResponsiveTable>
        <TableBody>
        </TableBody>
      </ResponsiveTable>
    </Card>
  );
};

CustomApps.displayName = "CustomApps";
export default CustomApps;
