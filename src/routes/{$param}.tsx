import { createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/{$param}")({
  component: RouteComponent,
  params: {
    parse: (rawParams) => {
      if (rawParams.param === "foo") {
        return {
          param: "foo" as const,
        };
      }

      if (rawParams.param === "bar") {
        return {
          param: "bar" as const,
        };
      }

      throw notFound();
    },
    stringify: (params) => {
      if (params.param !== "foo" && params.param !== "bar") {
        console.log("Types say this should never happen", params.param);
      }

      return {
        param: params.param,
      };
    },
  },
  notFoundComponent: () => <h1>Not found :(</h1>,
});

function RouteComponent() {
  return <div>Hello "/$param"!</div>;
}
