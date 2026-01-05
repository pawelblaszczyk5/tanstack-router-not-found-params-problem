import {
  createRootRoute,
  HeadContent,
  Link,
  Outlet,
  Scripts,
} from "@tanstack/react-router";

const RootComponent = () => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <HeadContent />
      </head>
      <body>
        <nav>
          <Link to="/{$param}" params={{ param: "foo" }}>
            Visit foo
          </Link>
          <Link to="/{$param}" params={{ param: "bar" }}>
            Visit bar
          </Link>
          {/* @ts-expect-error -- just for the sake of presenting error */}
          <Link href="/lorem">Visit weird page?</Link>
        </nav>
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
