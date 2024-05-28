import { RouteObject } from "react-router-dom";
import { Swap } from "./Swap";

export const swapRoutes: RouteObject[] = [
  {
    id: "swap",
    path: "",
    element: <Swap />,
  },
];