const URL = import.meta.env.VITE_URL_PROD;
const PORT = import.meta.env.VITE_PORT_PROD;

export const appConfig = {
  apiPrefix: URL + ":" + PORT,
  authenticatedEntryPath: import.meta.env.VITE_MAIN_PATH || "/about",
  tourPath: "",
  enableMock: false,
};
