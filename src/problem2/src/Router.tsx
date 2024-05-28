import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Spin } from "antd";
import { PublicContainer } from "./components/containers/PublicContainer";
import { SwapLayout } from "./components/layouts/SwapLayout";
import { rootLoader } from "./utils/helpers/router-loader.helper";
import { swapRoutes } from "./components/features/Swap";

const publicRoutes: RouteObject[] = [
  {
    path: "",
    Component: SwapLayout,
    children: swapRoutes,
  },
  // {
  //   path: "/swap",
  //   Component: SwapLayout,
  //   children: swapRoutes,
  // },
];

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    loader: rootLoader,
    children: [
      {
        Component: PublicContainer,
        children: publicRoutes,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} fallbackElement={<Spin />} />;
};