import { Server, Response } from "miragejs";

import { mockData } from "./mock-data";

export const customersRoutes = (server: Server) => {
  server.get("/api/customers/", () => {
    return new Response(200, {}, mockData);
  });

  //   server.post('/api/customers/', (_, request) => {
  //     console.log("mock routes: ", request);

  //     if (true) {
  //       return new Response(200, {}, {
  //         customers: mockData,
  //       })
  //     } else {
  //       return new Response(404, {}, {})
  //     }
  //   })
};
