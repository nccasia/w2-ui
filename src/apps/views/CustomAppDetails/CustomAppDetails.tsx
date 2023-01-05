import React from "react";

import { CustomAppUrlQueryParams } from "../../urls";

interface OrderListProps {
  id: string;
  params: CustomAppUrlQueryParams;
  token: string;
  onTokenClose: () => void;
}

export const CustomAppDetails: React.FC<OrderListProps> = ({
  onTokenClose,
}) => {
  React.useEffect(() => onTokenClose, [onTokenClose]);

  return <></>;
};

export default CustomAppDetails;
