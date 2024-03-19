//src/mocks/handlers.ts

import { HttpResponseResolver, delay, http, HttpResponse } from "msw";
import resolveURL from "../api/fetch.ts";

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
];
