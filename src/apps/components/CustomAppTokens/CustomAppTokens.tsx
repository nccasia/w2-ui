import { Card, TableBody, TableCell, TableHead } from "@material-ui/core";
import { Button } from "@saleor/components/Button";
import CardTitle from "@saleor/components/CardTitle";
import ResponsiveTable from "@saleor/components/ResponsiveTable";
import TableRowLink from "@saleor/components/TableRowLink";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { useStyles } from "./styles";

export interface CustomAppTokensProps {
  tokens: any;
  onCreate: () => void;
  onDelete: (id: string) => void;
}

const CustomAppTokens: React.FC<CustomAppTokensProps> = props => {
  const { onCreate } = props;
  const classes = useStyles(props);
  const intl = useIntl();

  return (
    <Card>
      <CardTitle
        title={intl.formatMessage({
          id: "0Mg8o5",
          defaultMessage: "Tokens",
          description: "header",
        })}
        toolbar={
          <Button
            variant="secondary"
            onClick={onCreate}
            data-test-id="create-token"
          >
            <FormattedMessage
              id="RMB6fU"
              defaultMessage="Create Token"
              description="button"
            />
          </Button>
        }
      />
      <ResponsiveTable>
        <TableHead>
          <TableRowLink>
            <TableCell className={classes.colNote}>
              <FormattedMessage id="0DRBjg" defaultMessage="Token Note" />
            </TableCell>
            <TableCell className={classes.colKey}>
              <FormattedMessage
                id="MAsLIT"
                defaultMessage="Key"
                description="custom app token key"
              />
            </TableCell>
            <TableCell className={classes.colActions}>
              <FormattedMessage
                id="VHuzgq"
                defaultMessage="Actions"
                description="table actions"
              />
            </TableCell>
          </TableRowLink>
        </TableHead>
        <TableBody></TableBody>
      </ResponsiveTable>
    </Card>
  );
};

CustomAppTokens.displayName = "CustomAppTokens";
export default CustomAppTokens;
