import { Card, TableBody, TableCell, Typography } from "@material-ui/core";
import CardTitle from "@saleor/components/CardTitle";
import Money from "@saleor/components/Money";
import ResponsiveTable from "@saleor/components/ResponsiveTable";
import Skeleton from "@saleor/components/Skeleton";
import TableCellAvatar from "@saleor/components/TableCellAvatar";
import TableRowLink from "@saleor/components/TableRowLink";
import { makeStyles } from "@saleor/macaw-ui";
import clsx from "clsx";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { maybe, renderCollection } from "../../../misc";

const useStyles = makeStyles(
  theme => ({
    avatarProps: {
      height: 64,
      width: 64,
    },
    colAvatar: {
      paddingBottom: theme.spacing(2),
      paddingRight: theme.spacing(),
      paddingTop: theme.spacing(2),
      width: 112,
    },
    colName: {
      width: "auto",
    },
    label: {
      paddingLeft: 0,
    },
    noProducts: {
      paddingBottom: 20,
      paddingTop: 20,
    },
    tableRow: {
      cursor: "pointer",
    },
  }),
  { name: "HomeProductListCard" },
);

interface HomeProductListProps {
  testId?: string;
  topProducts: any;
}

export const HomeProductList: React.FC<HomeProductListProps> = props => {
  const { topProducts, testId } = props;
  const classes = useStyles(props);

  const intl = useIntl();

  return (
    <Card data-test-id={testId}>
      <CardTitle
        title={intl.formatMessage({
          id: "XfCcNM",
          defaultMessage: "Important Tasks",
          description: "header",
        })}
      />
      <ResponsiveTable>
        <colgroup>
          <col className={classes.colAvatar} />
          <col className={classes.colName} />
          <col />
        </colgroup>
        <TableBody>
          {renderCollection(
            topProducts,
            variant => (
              <TableRowLink
                key={"skeleton"}
                hover={!!variant}
                className={clsx({
                  [classes.tableRow]: !!variant,
                })}
                href={"/"}
              >
                <TableCellAvatar
                  className={classes.colAvatar}
                  thumbnail={maybe(() => " ")}
                  avatarProps={classes.avatarProps}
                />

                <TableCell className={classes.label}>
                  {variant ? (
                    <>
                      <Typography color={"primary"}> </Typography>
                      <Typography color={"textSecondary"}> </Typography>
                      <Typography color={"textSecondary"}>
                        <FormattedMessage
                          id="0opVvi"
                          defaultMessage="{amount, plural,one {One ordered}other {{amount} Ordered}}"
                          description="number of ordered products"
                          values={{
                            amount: "0",
                          }}
                        />
                      </Typography>
                    </>
                  ) : (
                    <Skeleton />
                  )}
                </TableCell>

                <TableCell>
                  <Typography align={"right"}>
                    {maybe(
                      () => (
                        <Money money={null} />
                      ),
                      <Skeleton />,
                    )}
                  </Typography>
                </TableCell>
              </TableRowLink>
            ),
            () => (
              <TableRowLink>
                <TableCell colSpan={3} className={classes.noProducts}>
                  <Typography>
                    <FormattedMessage
                      id="Q1Uzbb"
                      defaultMessage="No products found"
                    />
                  </Typography>
                </TableCell>
              </TableRowLink>
            ),
          )}
        </TableBody>
      </ResponsiveTable>
    </Card>
  );
};

HomeProductList.displayName = "HomeProductList";
export default HomeProductList;
