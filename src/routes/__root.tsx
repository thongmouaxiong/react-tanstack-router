import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const linkStyle = `py-[5px] px-[20px] rounded-[6px]
  border-2 border-blue-500
  [&.active]:font-bold 
  [&.active]:text-white 
  [&.active]:bg-blue-500 
  `;
export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-4">
        <Link to="/" className={linkStyle}>
          Home
        </Link>
        <Link to="/about" className={linkStyle}>
          About
        </Link>
        <Link to="/service" className={linkStyle}>
          Service
        </Link>
        <Link to="/map" className={linkStyle}>
          Map
        </Link>
        <Link to="/excel" className={linkStyle}>
          Excel
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
