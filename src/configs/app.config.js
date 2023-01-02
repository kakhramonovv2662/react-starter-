const URL = import.meta.env.VITE_URL_PROD;
const PORT = import.meta.env.VITE_PORT_PROD;

export const appConfig = {
  apiPrefix: URL + ":" + PORT,
  authenticatedEntryPath: import.meta.env.VITE_MAIN_PATH || "/dashboard",
  unAuthenticatedEntryPath: import.meta.env.VITE_AUTH_PATH || "/sign-in",
  tourPath: "",
  enableMock: false,
};
