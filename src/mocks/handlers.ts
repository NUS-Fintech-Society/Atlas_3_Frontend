//src/mocks/handlers.ts

import { HttpResponseResolver, delay, http, HttpResponse } from "msw";
import resolveURL from "../api/fetch.ts";
import {auth_handlers} from "@/mocks/authentication/auth_handlers.ts";

const API_CALL_DELAY = 0;

function withDelay(
  durationMs: number,
  resolver: HttpResponseResolver
): HttpResponseResolver {
  return async (...args) => {
    await delay(durationMs);
    return resolver(...args);
  };
}

export const handlers = [
  http.get(resolveURL("/resource"), () => {
    return HttpResponse.json({
      result: "Hello World!",
    });
  }),

  http.get(
    resolveURL("/profile/:id"),
    withDelay(API_CALL_DELAY, ({ params }) => {
      const { id } = params;
      return HttpResponse.json({
        id,
        name: "Rick Astley",
        department: "Software",
        role: "Singer",
        email: "nevergonnagiveyouup@gmail.com",
        telegram: "@rickroll",
      });
    })
  ),

  http.patch(
    resolveURL("/profile/:id"),
    withDelay(API_CALL_DELAY, ({ params }) => {
      const { id } = params;
      const { name, department, role, email, telegram } = params as Record<
        string,
        string
      >;
      return HttpResponse.json({
        id,
        name,
        department,
        role,
        email,
        telegram,
      });
    })
  ),

  ...auth_handlers
];
