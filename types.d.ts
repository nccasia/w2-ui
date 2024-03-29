declare module "*.jpg";
declare module "*.png";
declare module "*.svg" {
  const content: any;
  export default content;
}

declare interface Window {
  PasswordCredential: PasswordCredential;
  __APP_CONFIG__: {
    API_URL: string;
    GOOGLE_CLIENT_ID: tring;
    APP_MOUNT_URI: string;
    MARKETPLACE_URL: string;
    SALEOR_APPS_PAGE_PATH: string;
    SALEOR_APPS_JSON_PATH: string;
    APP_TEMPLATE_GALLERY_PATH: string;
  };
}
