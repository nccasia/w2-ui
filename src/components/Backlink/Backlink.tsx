import { Backlink as MacawBacklink, BacklinkProps } from "@saleor/macaw-ui";
import { isExternalURL } from "@saleor/utils/urls";
import React from "react";
import { Link, LinkProps } from "react-router-dom";
import useRouter from "use-react-router";

type LinkType = React.FunctionComponent<LinkProps>;

export const Backlink = ({
  href,
  ...props
}: BacklinkProps<"a"> & BacklinkProps<"button">) => {
  const { history } = useRouter();
  const handleClickBacklink = () => {
    history.goBack();
  };
  if (href && !isExternalURL(href)) {
    return (
      <MacawBacklink<LinkType>
        {...props}
        component={(Link as unknown) as LinkType}
        to={href}
      />
    );
  }

  if (href) {
    return <MacawBacklink<"a"> href={href} {...props} />;
  }

  return (
    <MacawBacklink<"a"> href={href} {...props} onClick={handleClickBacklink} />
  );
};
