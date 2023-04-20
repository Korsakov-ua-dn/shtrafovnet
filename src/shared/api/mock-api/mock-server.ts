import { createServer } from "miragejs";
import { customersRoutes } from "./mock-routes";

export const createMirageServer = () => {
  const server = createServer({
    routes() {
      this.urlPrefix = process.env.API_BASE_URL as string
      customersRoutes(this)
    },
  });

  return server.shutdown;
};
