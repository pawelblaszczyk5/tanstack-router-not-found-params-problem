import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";

const RootComponent = () => {
  console.log("lol");
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <HeadContent />
      </head>
      <body>
        <Outlet></Outlet>
        <Scripts />
      </body>
    </html>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => <h1>Not found from root</h1>,
  staleTime: 5 * 1000,
});
