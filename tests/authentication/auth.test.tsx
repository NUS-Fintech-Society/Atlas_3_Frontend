import { beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {createMemoryRouter, RouterProvider} from "react-router-dom";
import routesConfig from "routes/routesConfig";
import setScreenSize  from "tests/utils";

const queryClient = new QueryClient();

const router = createMemoryRouter(routesConfig, {initialEntries: ["/login"]});

describe("authentication helper functions", () => {

  beforeEach(() => {
    setScreenSize(1920, 1080);
    render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>,
    );
  });

  test("renders the login page", () => {
    expect(screen.getByText("Login")).toBeInTheDocument();
  });
});
