import { Server, Response, Request } from "miragejs";
import { v1 } from "uuid";

import { mockData, errorResponse } from "./mock-data";

export const customersRoutes = (server: Server) => {
  server.get("/api/customers/", () => {
    return new Response(200, {}, mockData);
    // return new Response(404, {}, errorResponse);
  });

  server.post("/api/customers/", (_, request: Request) => {
    const { organization, ...rest } = JSON.parse(request.requestBody);
    const { bank_accounts } = organization;
    const now = new Date(Date.now()).toISOString();
    
    const responseBody = {
      id: v1(),
      org: {
        ...organization,
        id: v1(),
        bank_accounts: bank_accounts.map((acc) => ({
          ...acc,
          id: v1(),
          created_at: now,
          updated_at: now,
        })),
        created_at: now,
        updated_at: now,
      },
      balance: {
        currency: "RUB",
        current_amount: 0,
        credit_limit: 0,
        available_amount: 0,
      },
      created_at: now,
      updated_at: now,
      status: "active",
      ...rest,
    };

    return new Response(200, {}, responseBody);
  });
};
