import logoIcon from "@assets/favicons/ncclogo.png";
import safariPinnedTab from "@assets/favicons/safari-pinned-tab.svg";
import React from "react";
import Helmet from "react-helmet";

type ShopContext = any;

export const ShopContext = React.createContext<ShopContext>(undefined);

export const ShopProvider: React.FC = ({ children }) => {
  const { data } = { data: null };

  return (
    <>
      <Helmet>
        <link rel="apple-touch-icon" sizes="180x180" href={logoIcon} />
        <link rel="icon" type="image/png" sizes="32x32" href={logoIcon} />
        <link rel="icon" type="image/png" sizes="16x16" href={logoIcon} />
        <link rel="mask-icon" href={safariPinnedTab} />
      </Helmet>
      <ShopContext.Provider value={data ? data.shop : undefined}>
        {children}
      </ShopContext.Provider>
    </>
  );
};

export const Shop = ShopContext.Consumer;
export default Shop;
